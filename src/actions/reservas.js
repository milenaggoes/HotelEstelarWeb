import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/reservas"

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


export async function destroy(id){  
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(deleteUrl, options)

    if (resp.status !== 204) return {error: "Erro ao cancelar reserva. " + resp.status}

    revalidatePath("/reservas")

}

export async function update(reserva){
    const updateURL = url + "/" + reserva.id

    const options = {
        method: "PUT",
        body: JSON.stringify(reserva),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const resp = await fetch(updateURL, options)

    if (resp.status !== 200) return {error: "Erro ao atualizar reserva. " + resp.status}

    revalidatePath("/")
}

export async function getReserva(id){
    const getUrl = url + "/" + id
    const resp = await fetch(getUrl)
    if (resp.status !== 200) return {error: "Erro ao buscar dados da reserva. " + resp.status}
    const json = await resp.json()
    return json
}