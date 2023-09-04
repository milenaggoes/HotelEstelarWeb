import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="px-20 py-14">
        <h1 className="text-center mb-10">Selecione um de nossos quartos disponíveis</h1>
        <div className="">
          <div className="flex justify-evenly flex-wrap cursor-pointer">
            <div className="mb-10">
              <Image
                src="/premium.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto de luxo</h2>
              <h2>R$500 diária</h2>
            </div>
            <div>
              <Image
                src="/doissolteiro.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto duplo solteiro</h2>
              <h2>R$350 diária</h2>
            </div>
            <div>
              <Image
                src="/casalesolteiro.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto Família</h2>
              <h2>R$500 diária</h2>
            </div>

            <div>
              <Image
                src="/premium.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto de luxo </h2>
              <h2>R$500 diária</h2>
            </div>
            <div>
              <Image
                src="/doissolteiro.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto duplo solteiro</h2>
              <h2>R$350 diária</h2>
            </div>
            <div>
              <Image
                src="/casalesolteiro.png"
                width={300}
                height={146}
                alt="Picture of the author"
              />
              <h2>Quarto Família</h2>
              <h2>R$500 diária</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
