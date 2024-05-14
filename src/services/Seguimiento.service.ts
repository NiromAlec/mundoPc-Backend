// seguimiento.service.ts
import { actualizarSeguimiento, crearSeguimiento, obtenerSeguimientoId, obtenerSeguimientos } from "../dao/Seguimiento.dao";
import { Seguimiento } from "../entities/Seguimiento";
import { ErrorSeguimientoInexistente } from "../util/ErroresException";

export class SeguimientoService {
    static async obtenerSeguimientosService(): Promise<Seguimiento[]> {
        return obtenerSeguimientos();
    }

    static async obtenerSeguimientoIdService(id: string): Promise<Seguimiento> {
        const seguimiento = await obtenerSeguimientoId(id);
        if (!seguimiento) throw new ErrorSeguimientoInexistente();
        return seguimiento;
    }

    static async crearSeguimientoService(body: any): Promise<Seguimiento> {
        const { test, calificacion, cursoId } = body;
        const nuevoSeguimiento = new Seguimiento();
        nuevoSeguimiento.test = test;
        nuevoSeguimiento.calificacion = calificacion;
        nuevoSeguimiento.cursoId = cursoId;
        const seguimientoCreado = await crearSeguimiento(nuevoSeguimiento);
        return seguimientoCreado;
    }

    static async actualizarSeguimientoService(seguimientoId: string, data: any): Promise<any> {
        const verificarSeguimiento = await obtenerSeguimientoId(seguimientoId);
        if (!verificarSeguimiento) throw new ErrorSeguimientoInexistente();
        
        await actualizarSeguimiento(seguimientoId, data);
        return await obtenerSeguimientoId(seguimientoId);
    }
}
