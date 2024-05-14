// respuesta.dao.ts
import { Respuesta } from "../entities/Respuesta";
import { AppDataSource } from "../settings/ConexionDB-ORM";

export async function obtenerRespuestas(): Promise<Respuesta[]> {
    return await AppDataSource.manager.find(Respuesta);
}

export async function obtenerRespuestaId(id: number): Promise<Respuesta | null> {
    return await AppDataSource.manager.findOneBy(Respuesta, { id: id });
}

export async function crearRespuesta(respuesta: Respuesta): Promise<Respuesta> {
    return await AppDataSource.manager.save(respuesta);
}

export async function actualizarRespuesta(respuestaId: number, data: any): Promise<any> {
    return await AppDataSource.manager.update(Respuesta, respuestaId, data);
}
