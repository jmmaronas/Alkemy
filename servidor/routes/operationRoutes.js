import { Router } from "express";
import { create, del, read, update } from "../controller/operation.controller.js";

const opreationRoute = Router()

opreationRoute.get('/', read)
opreationRoute.post('/', create)
opreationRoute.put('/:id', update)
opreationRoute.delete('/:id', del)


export default opreationRoute