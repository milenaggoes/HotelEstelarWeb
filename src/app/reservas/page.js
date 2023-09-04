import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getReservas(){
  const url = "http://localhost:8080/api/reservas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default async function Home() {

  const data = await getReservas();
  
  return (
    <>
      <NavBar active={"reservas"}/>
      <main className="px-20 py-14">
        <h1 className="text-center mb-16 ">Selecione um de nossos quartos disponíveis</h1>
          <div id="data" className="flex justify-evenly flex-wrap ">
          {data.map(()=>{
            return(<DataRow reserva={reserva}/>)
                
            })}
            
          </div>
        
      </main>
    </>
  )
}
