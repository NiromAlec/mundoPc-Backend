import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { UsuarioBaseService } from "../services/Usuario.service";
import { catchedAsync } from "../middleware/HandlerErr";
import { UnidadService } from "../services/Unidad.service";

class UnidadController {
    //ToDo: Implementar manejo de errores
    //ToDo: Implementar manejo de errores
    //ToDo: Implementar manejo de errores

    obtenerUnidades = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        console.log("Buscando unidades");
        const units = await UnidadService.obtenerUnidadesService();
        createResponse(200, true, 'Unidades encontradas', res, units);
    });

    obtenerUnidadId = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const unit = await UnidadService.obtenerUnidadIdService(req.params.id);
        createResponse(200, true, 'Unidad encontrada', res, unit);
    });

    crearUnidad = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const unit = await UnidadService.crearUnidadService(req.body);
        createResponse(201, true, 'Unidad creada', res, unit);
    });

    actualizarUnidad = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const unit = await UnidadService.actualizarUnidadService(req.params.id, req.body);
        createResponse(200, true, 'Unidad actualizada', res, unit);
    });

}

export default new UnidadController();