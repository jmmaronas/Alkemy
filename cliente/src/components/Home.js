import ContenedorOperaciones from "./ListaOperaciones/ContenedorOperaciones.js"

export default function Home({operaciones}) {
    return (
        <div className="container mx-auto px-4">
            <h1 className="w-full text-center text-2xl">Bienvenido</h1>
            <div className="flex flex-row-reverse">
                <h3>Saldo: $<span></span> </h3>
            </div>
            <ContenedorOperaciones/>
        </div>
    )

}