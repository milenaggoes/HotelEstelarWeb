import Image from "next/image";

export default function DataRow({reserva}){
    const {acomodacao, diaria} = reserva
    return(
        <div id="data-row" className="mb-10 cursor-pointer">
            
            <Image
            src="/doissolteiro.png"
            width={300}
            height={146}
            alt="Picture of the author"
            />
            <h2>{acomodacao}</h2>
            <h2>{diaria.toFixed(2)}</h2>
        </div>
      
    )
}