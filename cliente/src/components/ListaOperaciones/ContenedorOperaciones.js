import { useState, useEffect } from 'react'
import ListaOperaciones from './ListaOperaciones.js'
import { useParams } from 'react-router-dom'

export default function ContenedorOperaciones() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const { filter } = useParams();

    useEffect(() => {        
        if (!filter) {            
            fetch("/operation/")
                .then(result => result.json())
                .then(data => {
                    setItems(data)                    
                    setIsLoaded(true)
                })
                .catch((error) => {
                    setIsLoaded(true)
                    setError(error)
                })
        } else {            
            fetch("/operation/")
                .then(result => result.json())
                .then(data => {
                    if (filter === "ingresos") {
                        let ingresos = data.filter(e => e.type === "ingreso")
                        setItems(ingresos);                        
                        setIsLoaded(true);
                    } else {
                        let ingresos = data.filter(e => e.type === "egreso")
                        setItems(ingresos);
                        setIsLoaded(true);
                    }
                })
                .catch((error) => {
                    setIsLoaded(true);
                    setError(error);
                })
        }
    }, [filter]);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return (
            <div className='d-flex'>
                <span className="visually-hidden">Loading...</span>
                <p className='mx-4'>Loading....</p>
            </div>
        );
    } else {
        if (!filter) {                        
            return (<ListaOperaciones operaciones={items.slice(-10)} operacionesTotales={items.slice(0)} />)
        } else {
            return (<ListaOperaciones operaciones={items.slice(0)} operacionesTotales={items.slice(0)} />)
        }
    }
}

