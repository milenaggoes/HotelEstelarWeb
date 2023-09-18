'use client'
import Button from "@/components/Button"

export default function Error({ error, reset }) {

    return (
        <main className="bg-yellow-500 m-20 p-12 rounded-xl">
            <div className="flex flex-col gap-3 justify-between items-center">
                <h2>Um erro aconteceu! {error.message} </h2>
                <div className="flex justify-around gap-2">
                    <Button href="/" variant="secundary">
                        voltar para home
                    </Button>

                    <Button onClick={() => reset()} >
                        Tentar novamente
                    </Button>
                </div>
            </div>
        </main>
    )
}