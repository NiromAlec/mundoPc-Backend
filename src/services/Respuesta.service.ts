// respuesta.service.ts
import { actualizarRespuesta, crearRespuesta, obtenerRespuestaId, obtenerRespuestas } from "../dao/Respuesta.dao";
import { Respuesta } from "../entities/Respuesta";
import { ErrorRespuestaInexistente } from "../util/ErroresException";

export class RespuestaService {
    static async obtenerRespuestasService(): Promise<Respuesta[]> {
        return obtenerRespuestas();
    }

    static async obtenerRespuestaIdService(id: number): Promise<Respuesta> {
        const respuesta = await obtenerRespuestaId(id);
        if (!respuesta) throw new ErrorRespuestaInexistente();
        return respuesta;
    }

    static async crearRespuestaService(body: any): Promise<Respuesta> {
        const { respuestaUsuario, peso } = body;
        const nuevaRespuesta = new Respuesta();
        nuevaRespuesta.respuestaUsuario = respuestaUsuario;
        nuevaRespuesta.peso = peso;
        const respuestaCreada = await crearRespuesta(nuevaRespuesta);
        return respuestaCreada;
    }

    static async actualizarRespuestaService(respuestaId: number, data: any): Promise<any> {
        const verificarRespuesta = await obtenerRespuestaId(respuestaId);
        if (!verificarRespuesta) throw new ErrorRespuestaInexistente();
        
        await actualizarRespuesta(respuestaId, data);
        return await obtenerRespuestaId(respuestaId);
    }
}
