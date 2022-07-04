import Operacion from "./Operacion.js"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function ListaOperaciones({ operaciones, operacionesTotales }) {
    const { filter } = useParams()
    return (
        <div className="container flex flex-col align-middle justify-center px-8 py-4">
            <div className={`flex flex-row justify-around ${filter !== null && "hidden"}`}>
                <h3>Total Ingresos: <span>$ {operacionesTotales.reduce((acc, oper) => oper.type === "ingreso" ? acc + oper.amount : acc, 0)}</span> </h3>
                <h3>Total Egresos: <span className="text-red-500">$ {operacionesTotales.reduce((acc, oper) => oper.type === "egreso" ? acc + oper.amount : acc, 0)}</span> </h3>
                <h3>Saldo: $<span>{operacionesTotales.reduce((acc, oper) => oper.type === "ingreso" ? acc + oper.amount : acc - oper.amount, 0)}</span> </h3>
            </div>
            <h1 className="w-full text-center text-2xl">{!filter ? "Lista de Operaciones" : filter === "ingresos" ? "Ingresos" : "Egresos"}</h1>
            <div className="flex w-full justify-between">
                <Link to='/' className="mx-2 w-full border-1 border-gray-500  text-white text-center text-lg font-sans  bg-slate-600 rounded-md py-2 hover:bg-slate-500 my-2">Inicio</Link>
                <Link to='/new' className="mx-2 w-full border-1 border-gray-500  text-white text-center text-lg font-sans  bg-green-600 rounded-md py-2 hover:bg-green-500 my-2">Agregar Operacion</Link>
                <Link to='/operaciones/' className="w-full border-1 border-gray-500  text-white text-center text-lg font-sans bg-fuchsia-600 rounded-md py-2 hover:bg-fuchsia-500 my-2">Lista de operaciones</Link>
                <Link to='/operaciones/ingresos' className="mx-2 w-full border-1 border-gray-500  text-white text-center text-lg font-sans  bg-blue-600 rounded-md py-2 hover:bg-blue-500 my-2">Ingresos</Link>
                <Link to='/operaciones/egresos' className="mr-2 w-full border-1 border-gray-500  text-white text-center text-lg font-sans  bg-red-600 rounded-md py-2 hover:bg-red-500 my-2">Egresos</Link>
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