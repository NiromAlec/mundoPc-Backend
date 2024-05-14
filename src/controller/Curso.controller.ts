// curso.controller.ts
import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { catchedAsync } from "../middleware/HandlerErr";
import { CursoService } from "../services/Curso.service";

class CursoController {
    obtenerCursos = catchedAsync(async (req: Request, res: Response) => {
        console.log("Buscando cursos");
        const cursos = await CursoService.obtenerCursosService();
        createResponse(200, true, 'Cursos encontrados', res, cursos);
    });

    obtenerCursoId = catchedAsync(async (req: Request, res: Response) => {
        const curso = await CursoService.obtenerCursoIdService(req.params.id);
        createResponse(200, true, 'Curso encontrado', res, curso);
    });

    crearCurso = catchedAsync(async (req: Request, res: Response) => {
        const curso = await CursoService.crearCursoService(req.body);
        createResponse(201, true, 'Curso creado', res, curso);
    });

    actualizarCurso = catchedAsync(async (req: Request, res: Response) => {
        const curso = await CursoService.actualizarCursoService(req.params.id, req.body);
        createResponse(200, true, 'Curso actualizado', res, curso);
    });
}

export default new CursoController();
