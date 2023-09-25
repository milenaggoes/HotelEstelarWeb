import { getReserva } from "@/actions/reservas";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormReservas({params}) {

    const reserva = await getReserva(params.id)

    return (
        <>
            <NavBar active="reservas" />
            <FormEdit reserva={reserva} />
        </>
    )
}