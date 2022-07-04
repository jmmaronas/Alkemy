import Operacion from "./Operacion.js"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function ListaOperaciones({ operaciones, operacionesTotales } ) {
    const filter=useParams("filter")
    return (
        <div className="container px-8 py-4">
            <div className={`flex flex-row justify-around ${filter&&"hidden"}` }>
                <h3>Total Ingresos: <span>$ {operacionesTotales.reduce((acc, oper) => oper.type === "ingreso" ? acc + oper.amount : acc, 0)}</span> </h3>
                <h3>Total Egresos: <span className="text-red-500">$ {operacionesTotales.reduce((acc, oper) => oper.type === "egreso" ? acc + oper.amount : acc, 0)}</span> </h3>
                <h3>Saldo: $<span>{operacionesTotales.reduce((acc, oper) => oper.type === "ingreso" ? acc + oper.amount : acc - oper.amount, 0)}</span> </h3>
            </div>
            <div className="flex w-full">
                <Link to='/new' className="w-full border-1 border-gray-500  text-white text-center text-lg font-sans  bg-green-600 rounded-md py-2 hover:bg-green-500 my-2">Agregar Operacion</Link>
            </div>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="border border-gray-400 px-2 py-2  text-gray-800">Fecha</th>
                        <th className="border border-gray-400 px-2 py-2  text-gray-800">Concepto</th>
                        <th className="border border-gray-400 px-2 py-2  text-gray-800">Monto</th>
                        <th className="border border-gray-400 px-2 py-2  text-gray-800">Tipo</th>
                        <th className="border border-gray-400 px-2 py-2  text-gray-800">Accion</th>
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