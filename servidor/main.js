import express from 'express'
import { dirname, join } from "path"
import { fileURLToPath } from "url"
//import {read} from './controller/operation.controller.js'
import opreationRoute from './routes/operationRoutes.js'


const app=express()
const PORT= process.env.PORT || 8080
const __dirname= dirname(fileURLToPath(import.meta.url))

//;(async ()=>console.log(await read()))()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(join(__dirname,'../cliente/build')))
app.use('/operation', opreationRoute)

const server=app.listen(PORT, ()=>console.log(`Server on port ${server.address().port}`))
server.on('error',(err)=>console.error(err))