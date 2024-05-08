import { Router } from "express";
import ActividadController from "../controller/Actividad.controller";
// import { AuthSecurity } from "../middleware/Auth/AuthSecurity";

class ActividadRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        // this.router.use(AuthSecurity.analizarToken, AuthSecurity.verificarRol(['profesor']));
        this.router.get('/', ActividadController.obtenerActividades);
        this.router.get('/:id', ActividadController.obtenerActividadId);
        this.router.patch('/:id', ActividadController.actualizarActividad);
        this.router.post('/create', ActividadController.crearActividad);
    }
}

export default new ActividadRouter().router;