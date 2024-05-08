import { Router } from "express";
import UsuarioBaseController from "../controller/Usuario.controller";
import { AuthSecurity } from "../middleware/Auth/AuthSecurity";
// import { AuthSecurity } from "../middleware/Auth/AuthSecurity";

class UsuarioRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        // this.router.use(AuthSecurity.analizarToken, AuthSecurity.verificarRol(['profesor']));
        this.router.get('/stud', UsuarioBaseController.obtenerEstudiantes);
        this.router.get('/teach', UsuarioBaseController.obtenerProfesores);
        this.router.get('/stud/:id', UsuarioBaseController.obtenerEstudianteId);
        this.router.get('/stud/:id', UsuarioBaseController.obtenerEstudianteId);
        this.router.patch('/stud/:id', UsuarioBaseController.actualizarEstudiante);
        this.router.patch('/teach/:id', /* AuthSecurity.analizarToken, AuthSecurity.verificarRol(['profesor']) ,*/UsuarioBaseController.actualizarProfesor);
        this.router.get('/teach/:id', AuthSecurity.analizarToken, AuthSecurity.verificarRol(['profesor']),UsuarioBaseController.obtenerEstudianteId);
        this.router.post('/create', UsuarioBaseController.crearUsuario);
    }
}

export default new UsuarioRouter().router;