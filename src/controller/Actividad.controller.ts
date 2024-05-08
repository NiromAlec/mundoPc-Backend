import { Request, Response } from "express";
import { ActividadService } from "../services/Actividad.service";
import { createResponse } from "../util/ResponseJson";
import { catchedAsync } from "../middleware/HandlerErr"; // Importa catchedAsync

class ActividadController {

    obtenerActividades = catchedAsync(async (_: Request, res: Response) => { // Usa catchedAsync aquí
        const activitys = await ActividadService.obtenerActividadesService();
        createResponse(200, true, 'Actividades encontradas', res, activitys);
    });

    obtenerActividadId = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const activity = await ActividadService.obtenerActividadIdService(req.params.id);
        createResponse(200, true, 'Actividad encontrada', res, activity);
    });

    crearActividad = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const activity = await ActividadService.crearActividadService(req.body);
        createResponse(201, true, 'Actividad creada', res, activity);
    });

    actualizarActividad = catchedAsync(async (req: Request, res: Response) => { // Usa catchedAsync aquí
        const activity = await ActividadService.actualizarActividadService(req.params.id, req.body);
        createResponse(200, true, 'Actividad actualizada', res, activity);
    });

}

export default new ActividadController();
