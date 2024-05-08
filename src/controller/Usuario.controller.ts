import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { UsuarioBaseService } from "../services/Usuario.service";
import { catchedAsync } from "../middleware/HandlerErr";

class UsuarioBaseController {
    //ToDo: Implementar manejo de errores
    //ToDo: Implementar manejo de errores
    //ToDo: Implementar manejo de errores

    obtenerEstudiantes = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        console.log("Buscando usuarios");
        const users = await UsuarioBaseService.obtenerEstudiantesService();
        createResponse(200, true, 'Usuarios encontrados', res, users);
    });
    obtenerProfesores = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        console.log("Buscando usuarios");
        const users = await UsuarioBaseService.obtenerProfesoresService();
        createResponse(200, true, 'Usuarios encontrados', res, users);
    });

    obtenerEstudianteId = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const user = await UsuarioBaseService.obtenerEstudianteIdService(req.params.id);
        createResponse(200, true, 'Usuario encontrado', res, user);
    });

    obtenerProfesorId = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const user = await UsuarioBaseService.obtenerProfesorIdService(req.params.id);
        createResponse(200, true, 'Usuario encontrado', res, user);
    });

    crearUsuario = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const user = await UsuarioBaseService.crearUsuarioService(req.body);
        createResponse(201, true, 'Usuario creado', res, user);
    });

    actualizarEstudiante = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const user = await UsuarioBaseService.actualizarEstudianteService(req.params.id, req.body);
        createResponse(200, true, 'Estudiante actualizado', res, user);
    });

    actualizarProfesor = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const user = await UsuarioBaseService.actualizarProfesorService(req.params.id, req.body);
        createResponse(200, true, 'Profesor actualizado', res, user);
    });
}

export default new UsuarioBaseController();