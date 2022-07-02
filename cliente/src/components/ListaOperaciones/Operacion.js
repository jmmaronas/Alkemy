export default function Operacion({ operacion }) {
    return (
        <tr className="bg-gray-200">
            <td className="border border-gray-400 px-4 py-2 ">{operacion.date}</td>
            <td className="border border-gray-400 px-4 py-2 ">{operacion.concept}</td>
            <td className="border border-gray-400 px-4 py-2 ">{operacion.amount}</td>
            <td className="border border-gray-400 px-4 py-2 ">{operacion.type}</td>
        </tr>

    )
}
