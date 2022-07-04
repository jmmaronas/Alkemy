import { myKnex } from "../db.js"


export const create =async (req, res) => {    
    try {
        const [id]=await myKnex('Operaciones').insert(req.body)
        return res.json({id})
    } catch (err) { console.error(err) }
}

export const read = async (req, res) => {
    try {
        return res.json(await myKnex('Operaciones').select('*'))
    } catch (err) { console.error(err) }
}

export const update =async (req, res) => {    
    try {
        await myKnex('Operaciones').where({id:req.params.id}).update(req.body)
        return res.send("update")
    } catch (err) { console.error(err) }
}

export const del =async (req, res) => {    
    try {
        await myKnex('Operaciones').where({id:req.params.id}).del()
        return res.send("delete")
    } catch (err) { console.error(err) }
}