import { Unidad } from "../entities/Unidad";
import { AppDataSource } from "../settings/ConexionDB-ORM";

export async function obtenerUnidades(): Promise<Unidad[]> {
    return await AppDataSource.manager.find(Unidad);
}

export async function obtenerUnidadId(id: string): Promise<Unidad | null> {
    return await AppDataSource.manager.findOneBy(Unidad, { id: id });
}

export async function obtenerUnidadNombre(nombre: string): Promise<Unidad | null> {
    return await AppDataSource.manager.findOneBy(Unidad, { nombre: nombre });
}

export async function crearUnidad(unidad: Unidad): Promise<Unidad> {
    return await AppDataSource.manager.save(unidad);
}

export async function actualizarUnidad(unidadId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Unidad, unidadId, data);
}
