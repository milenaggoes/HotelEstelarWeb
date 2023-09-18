"use server"

import { revalidatePath } from "next/cache"

const url = "http://localhost:3000/api/reservas"

export async function create(formData) {
    const options = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    
    const resp = await fetch(url, options)
    if (resp.status !== 201){
        const json = await resp.json()
        const erros = json.reduce((str, erro) => str += ". " + erro.message, "")
        return {message: "Erro ao cadastrar" + erros}
    }
    revalidatePath("/reservas")
    return {ok: "success"}

}

export async function getReservas(){
    const resp = await fetch(url, { next: { revalidate: 3600 } })
    if (!resp.ok) throw new Error("Não pode carregar os dados")
    return resp.json()
  }