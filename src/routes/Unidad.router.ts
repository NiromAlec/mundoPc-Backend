import { Router } from "express";
import UnidadController from "../controller/Unidad.controller";
// import { AuthSecurity } from "../middleware/Auth/AuthSecurity";

class UnidadRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        // this.router.use(AuthSecurity.analizarToken, AuthSecurity.verificarRol(['profesor']));
        this.router.get('/', UnidadController.obtenerUnidades);
        this.router.get('/:id', UnidadController.obtenerUnidadId);
        this.router.patch('/:id', UnidadController.actualizarUnidad);
        this.router.post('/create', UnidadController.crearUnidad);
    }
}

export default new UnidadRouter().router;