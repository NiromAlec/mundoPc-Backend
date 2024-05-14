// curso.router.ts
import { Router } from "express";
import CursoController from "../controller/Curso.controller";

class CursoRouter {
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.get('/', CursoController.obtenerCursos);
        this.router.get('/:id', CursoController.obtenerCursoId);
        this.router.patch('/:id', CursoController.actualizarCurso);
        this.router.post('/create', CursoController.crearCurso);
    }
}

export default new CursoRouter().router;
