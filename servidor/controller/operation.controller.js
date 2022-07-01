import { myKnex } from "../db.js"

export const create = (req, res) => {
    try {
        //myKnex('Operaciones').insert()
        return res.send("created")
    } catch (err) { console.error(err) }
}

export const read = async (req, res) => {
    try {
        return res.json(await myKnex('Operaciones').select('*'))
    } catch (err) { console.error(err) }
}

export const update = (req, res) => {
    try {
        //myKnex('Operaciones').select('*')
        return res.send("update")
    } catch (err) { console.error(err) }
}

export const del = (req, res) => {
    try {
        //myKnex('Operaciones').select('*')
        return res.send("delete")
    } catch (err) { console.error(err) }
}