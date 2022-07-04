import { createContext, useContext, useState, useEffect } from "react"


const operacionesContext = createContext();

export const { Provider } = operacionesContext;

export function useContexto() {
    return useContext(operacionesContext);
}

function OperacionesProvider({ children }) {
    const [operaciones, setOperaciones] = useState()
    useEffect(() => {
        fetch("/operation/")
            .then(result => result.json())
            .then(data => {
                setOperaciones(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    const crearOperacion = async (data) => {
        await fetch("/operation/", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const updateOperaciones = async (id, data) => {
        console.log(data)
        await fetch(`/operation/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const valorDelContexto = {
        operaciones,
        crearOperacion,
        updateOperaciones
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )

}

export default OperacionesProvider