// respuesta.router.ts
import { Router } from "express";
import RespuestaController from "../controller/Respuesta.controller";

class RespuestaRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/', RespuestaController.obtenerRespuestas);
        this.router.get('/:id', RespuestaController.obtenerRespuestaId);
        this.router.patch('/:id', RespuestaController.actualizarRespuesta);
        this.router.post('/create', RespuestaController.crearRespuesta);
    }
}

export default new RespuestaRouter().router;
