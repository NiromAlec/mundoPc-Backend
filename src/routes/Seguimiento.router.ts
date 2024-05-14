// seguimiento.router.ts
import { Router } from "express";
import SeguimientoController from "../controller/Seguimiento.controller";

class SeguimientoRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/', SeguimientoController.obtenerSeguimientos);
        this.router.get('/:id', SeguimientoController.obtenerSeguimientoId);
        this.router.patch('/:id', SeguimientoController.actualizarSeguimiento);
        this.router.post('/create', SeguimientoController.crearSeguimiento);
    }
}

export default new SeguimientoRouter().router;
