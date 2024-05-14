// seguimiento.controller.ts
import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { catchedAsync } from "../middleware/HandlerErr";
import { SeguimientoService } from "../services/Seguimiento.service";

class SeguimientoController {
    obtenerSeguimientos = catchedAsync(async (req: Request, res: Response) => {
        console.log("Buscando seguimientos");
        const seguimientos = await SeguimientoService.obtenerSeguimientosService();
        createResponse(200, true, 'Seguimientos encontrados', res, seguimientos);
    });

    obtenerSeguimientoId = catchedAsync(async (req: Request, res: Response) => {
        const seguimiento = await SeguimientoService.obtenerSeguimientoIdService(req.params.id);
        createResponse(200, true, 'Seguimiento encontrado', res, seguimiento);
    });

    crearSeguimiento = catchedAsync(async (req: Request, res: Response) => {
        const seguimiento = await SeguimientoService.crearSeguimientoService(req.body);
        createResponse(201, true, 'Seguimiento creado', res, seguimiento);
    });

    actualizarSeguimiento = catchedAsync(async (req: Request, res: Response) => {
        const seguimiento = await SeguimientoService.actualizarSeguimientoService(req.params.id, req.body);
        createResponse(200, true, 'Seguimiento actualizado', res, seguimiento);
    });
}

export default new SeguimientoController();
