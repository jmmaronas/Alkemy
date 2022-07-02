export default function RegistroOperaciones() {
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-4">
            <div className="max-w-md w-full space-y-8">
                <form className="mt-8 space-y-6" action="#" method="POST">                    
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="concept" className="">
                                Concepto
                            </label>
                            <input
                                id="concept"
                                name="concept"
                                type="text"                                
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
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Monto"
                            />
                        </div>
                        <div>
                            <label htmlFor="type" >
                                Tipo
                            </label>
                            <select 
                                name="type"                                 
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                >
                                <option value="">Seleccione tipo de operacion..</option>                                    
                                <option value="ingreso">Ingreso</option>
                                <option value="egreso">Egreso</option>
                            </select>                            
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
