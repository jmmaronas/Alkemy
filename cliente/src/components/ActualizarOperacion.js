import { useParams } from "react-router-dom"
import { useContexto } from "./context/operacionesContext.js"

export default function ActualizarOperacion() {
    const { operaciones, updateOperaciones } = useContexto()
    const { id } = useParams()
    const { concept, amount, type, date } = operaciones.find(operacion => operacion.id === Number(id))
    const handleSubmit = (e) => {
        e.preventDefault()
        const concept = document.getElementById("concept").value
        const amount = document.getElementById("amount").value
        const type = document.getElementById("type").value
        const date = document.getElementById("date").value      
        updateOperaciones(Number(id), { concept, amount: Number(amount), type,  date})
        window.location.href="/"
    }
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-4">
            <div className="max-w-md w-full space-y-8">
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="concept" className="">
                                Concepto
                            </label>
                            <input
                                id="concept"
                                name="concept"
                                type="text"
                                defaultValue={concept}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Detalles"
                            />
                        </div>
                        <div>
                            <label htmlFor="amount" >
                                Monto
                            </label>
                            <input
                                id="amount"
                                name="amount"
                                type="number"
                                defaultValue={amount}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Monto"
                            />
                        </div>
                        <div>
                            <label htmlFor="date" >
                                Fecha
                            </label>
                            <input
                                id="date"
                                name="date"
                                type="date"
                                defaultValue={date}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Monto"
                            />
                        </div>
                        <div>
                            <label htmlFor="type" >
                                Tipo
                            </label>
                            <input
                                id="type"
                                name="type"
                                defaultValue={type}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                readOnly
                            >
                            </input>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}
