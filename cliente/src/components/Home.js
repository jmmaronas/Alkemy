import ContenedorOperaciones from "./ListaOperaciones/ContenedorOperaciones.js"

export default function Home() {    
    return (
        <div className="container mx-auto px-8">
            <h1 className="w-full text-center text-2xl">Bienvenido</h1>            
            <ContenedorOperaciones />
        </div>
    )

}