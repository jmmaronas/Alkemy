import {myKnex} from './db.js'

myKnex.schema.createTable("Operaciones",(table) => {
    table.increments("id"),
    table.string("concept"),
    table.string("mont"),
    table.string("date"),
    table.string("tipo")
})
    .then(() => console.log("table created"))
    .catch((err) => { console.log(err.message) })
    .finally(() => myKnex.destroy())
