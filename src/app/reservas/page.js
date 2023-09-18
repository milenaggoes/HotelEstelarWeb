import DataRow from "./DataRow";
import Button from "@/components/Button";
import { CreditCardIcon } from "@heroicons/react/24/outline";
import { getReservas } from "@/actions/reservas";

export default async function Home() {
  const data = await getReservas()
  return (
    <>
      <NavBar active={"reservas"} />
      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Reservas</h2>
          <Button href="/reservas/new" icon={<CreditCardIcon className="h-6 w-6" />}>
            criar conta
          </Button>
        </div>
        <div id="data" className="text-slate-300 m-1">
          {data.map(reserva => <DataRow reserva={reserva} /> )}
        </div>
      </main>
    </>
  )
}