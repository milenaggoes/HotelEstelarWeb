import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="bg-yellow-500 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-black text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-black">Hotel Estelar</h1>
                    </a>
                </li>
                <li>
                    <Link className={active=="reservas" && "text-slate-700"} href="api/reservas">
                        reservas
                    </Link>
                </li>
                
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}