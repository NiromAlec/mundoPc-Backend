// seguimiento.dao.ts
import { Seguimiento } from "../entities/Seguimiento";
import { AppDataSource } from "../settings/ConexionDB-ORM";

export async function obtenerSeguimientos(): Promise<Seguimiento[]> {
    return await AppDataSource.manager.find(Seguimiento);
}

export async function obtenerSeguimientoId(id: string): Promise<Seguimiento | null> {
    return await AppDataSource.manager.findOneBy(Seguimiento, { id: id });
}

export async function crearSeguimiento(seguimiento: Seguimiento): Promise<Seguimiento> {
    return await AppDataSource.manager.save(seguimiento);
}

export async function actualizarSeguimiento(seguimientoId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Seguimiento, seguimientoId, data);
}
