// respuesta.controller.ts
import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { catchedAsync } from "../middleware/HandlerErr";
import { RespuestaService } from "../services/Respuesta.service";

class RespuestaController {
    obtenerRespuestas = catchedAsync(async (req: Request, res: Response) => {
        console.log("Buscando respuestas");
        const respuestas = await RespuestaService.obtenerRespuestasService();
        createResponse(200, true, 'Respuestas encontradas', res, respuestas);
    });

    obtenerRespuestaId = catchedAsync(async (req: Request, res: Response) => {
        const respuesta = await RespuestaService.obtenerRespuestaIdService(parseInt(req.params.id));
        createResponse(200, true, 'Respuesta encontrada', res, respuesta);
    });

    crearRespuesta = catchedAsync(async (req: Request, res: Response) => {
        const respuesta = await RespuestaService.crearRespuestaService(req.body);
        createResponse(201, true, 'Respuesta creada', res, respuesta);
    });

    actualizarRespuesta = catchedAsync(async (req: Request, res: Response) => {
        const respuesta = await RespuestaService.actualizarRespuestaService(parseInt(req.params.id), req.body);
        createResponse(200, true, 'Respuesta actualizada', res, respuesta);
    });
}

export default new RespuestaController();
