import NavBar from "@/components/NavBar";

export default function Reservas() {
  return (
    <>
      <NavBar active={"reservas"}/>
      <main>
        <ul className="flex justify-center gap-20 mt-16 border-solid ">
          <li className="bg-amber-500 w-44 rounded-xl shadow-md text-center">Todas</li>
          <li className="w-44 rounded-xl shadow-md text-center">Proxímas</li>
          <li className="w-44 rounded-xl shadow-md text-center">Finalizadas</li>
        </ul> 
      </main>
    </>
  )
}
