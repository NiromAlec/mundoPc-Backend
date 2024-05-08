import { actualizarUnidad, obtenerUnidadId, obtenerUnidades } from "../dao/Unidad.dao";
import { Unidad } from "../entities/Unidad";
import { ErrorUnidadInexistente } from "../util/ErroresException";

export class UnidadService {
    static async obtenerUnidadesService(): Promise<Unidad[]> {
        return obtenerUnidades();
    }

    static async obtenerUnidadIdService(id: string): Promise<Unidad> {
        const unidad = await obtenerUnidadId(id);
        if (!unidad) throw new ErrorUnidadInexistente();
        return unidad;
    }

    static async actualizarUnidadService(unidadId: string, data: any): Promise<any> {
        const verifyUnidad = await obtenerUnidadId(unidadId);
        if (!verifyUnidad) throw new ErrorUnidadInexistente();
        
        await actualizarUnidad(unidadId, data);
        return await obtenerUnidadId(unidadId);
    }
}
