import { Link } from "react-router-dom"


export default function Operacion({ operacion }) {

    return (
        <tr className="bg-gray-200">
            <td className="border border-gray-400 px-2 py-2 ">{operacion.date}</td>
            <td className="border border-gray-400 px-2 py-2 ">{operacion.concept}</td>
            <td className={`border border-gray-400 px-2 py-2 text-right ${operacion.type==="egreso"&& "text-red-600"}`}>{operacion.amount}</td>
            <td className="border border-gray-400 px-2 py-2 ">{operacion.type}</td>
            <td className="border border-gray-400 px-2 py-2 "><Link to={`/update/${operacion.id}`}>Update</Link></td>
        </tr>

    )
}
