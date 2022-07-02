import {myKnex} from './db.js'

myKnex.schema.createTable("Operaciones",(table) => {
    table.increments("id"),
    table.string("concept"),
    table.integer("amount"),
    table.string("date"),
    table.string("type")
})
    .then(() => console.log("table created"))
    .catch((err) => { console.log(err.message) })
    .finally(() => myKnex.destroy())
