import knex from 'knex'

export const myKnex = knex({
    client:"sqlite3",
    connection:{
        filename: "./DB/operations.sqlite"
    },
    useNullAsDefault: true
})