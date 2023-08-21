import Link from "next/link";

export default function NavBar({active}){
    return(
        <nav className="bg-amber-400 p-6 flex justify-between items-center">
        <ul className="flex gap-24 items-end text-sm">
          <li><Link  href="/">
              <h1 className="text-2xl font-bold">HotelEstelar</h1>
          </Link></li>
          <li><Link className={active=="reservas" && "font-semibold"} href="/reservas">reservas</Link></li>
        </ul>
  
        <div className="h-12 w-12 rounded-full overflow-hidden">
          <img src="https://i.pravatar.cc/100" alt="avatar do usuário"/>
        </div>
      </nav>
    )
}