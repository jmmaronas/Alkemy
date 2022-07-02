import { Router } from "express";
import { create, del, read, update } from "../controller/operation.controller.js";

const opreationRoute = Router()

opreationRoute.get('/', read)
opreationRoute.post('/new', create)
opreationRoute.put('/update/:id', update)
opreationRoute.delete('/delete/:id', del)


export default opreationRoute