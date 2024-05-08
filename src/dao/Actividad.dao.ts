import { Actividad } from "../entities/Actividad";
import { AppDataSource } from "../settings/ConexionDB-ORM";

export async function obtenerActividades (): Promise<Actividad[]> {
    return await AppDataSource.manager.find(Actividad);
}

export async function obtenerActividadId (id: string): Promise<Actividad | null> {
    return await AppDataSource.manager.findOneBy(Actividad, {id: id});
}
export async function obtenerActividadNombre (nombre: string): Promise<Actividad | null> {
    const user = await AppDataSource.manager.findOneBy(Actividad, {nombre: nombre});
    return user;
}
export async function crearActividad (activad: Actividad): Promise<Actividad> {
    return await AppDataSource.manager.save(activad);
}
export async function actualizarActividad (actividadId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Actividad, actividadId, data);
}