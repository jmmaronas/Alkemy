import Operacion from "./Operacion.js"
export default function ListaOperaciones({ operaciones }) {
    return (
        <div className="container">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-4 py-2  text-gray-800">Fecha</th>
                        <th className="border border-gray-400 px-4 py-2  text-gray-800">Concepto</th>
                        <th className="border border-gray-400 px-4 py-2  text-gray-800">Monto</th>
                        <th className="border border-gray-400 px-4 py-2  text-gray-800">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {operaciones.map(operacion =>
                        <Operacion key={operacion.id} operacion={operacion} />)}
                </tbody>
            </table>
        </div>


    )
}