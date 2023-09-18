import DropMenu from "@/components/DropMenu";
import { HomeIcon } from "@heroicons/react/24/outline";

export default function DataRow({reserva}) {
    const {nome} = reserva
    return (
        <div id="data-row" className="group/row flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
            <div className="flex gap-1">
                <HomeIcon className="h-6 w-6" />
                <span>{nome}</span>
            </div>
            <div className="flex items-center">
                <span>R$ 300.00</span>
                <span className="invisible group-hover/row:visible" >
                    <DropMenu />    
                </span>
            </div>
        </div>
    )
}