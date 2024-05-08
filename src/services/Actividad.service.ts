import { actualizarActividad, crearActividad, obtenerActividadId, obtenerActividades } from "../dao/Actividad.dao";
import { Actividad } from "../entities/Actividad";
import { Cuestionario } from "../entities/Cuestionario";
import { Desconectada } from "../entities/Desconectada";
import { Laberinto } from "../entities/Laberinto";
import { ErrorActividadInexistente } from "../util/ErroresException";

export class ActividadService {
    static async obtenerActividadesService(): Promise<Actividad[]> {
        return obtenerActividades();
    }
    static async obtenerActividadIdService(id: string): Promise<Actividad> {
        const activity = await obtenerActividadId(id);
        if (!activity) throw new ErrorActividadInexistente();
        return activity;
    }
    static async crearActividadService(body: any): Promise<any> {

        const { nombre, descripcion, estado, indice, tipoActividad, pesoRespuestas, habilidades, ejercicioImage, ejemploImage, 
                dimension, casillas, respuestas, pista, respuestaCorrecta, 
                nombreArchivo, mejorCamino, mejorCamino2, initialState} = body;
        
        let activity: Actividad;

        switch (tipoActividad) {
            case "Cuestionario":
                activity = new Cuestionario();
                if (activity instanceof Cuestionario) {
                    activity.dimension = dimension;
                    activity.casillas = casillas;
                    // activity.respuestas = respuestas;
                    activity.pista = pista;
                    activity.respuestaCorrecta = respuestaCorrecta;
                }
                break;
            case "Laberinto":
                activity = new Laberinto();
                if (activity instanceof Laberinto) {
                    activity.nombreArchivo = nombreArchivo;
                    activity.mejorCamino = mejorCamino;
                    activity.mejorCamino2 = mejorCamino2 ?? "";
                    activity.initialState = initialState;
                }
                break;
            case "Desconectada":
                activity = new Desconectada();
        }

        activity!.nombre = nombre;
        activity!.descripcion = descripcion;
        activity!.estado = estado;
        activity!.indice = indice;
        activity!.tipoActividad = tipoActividad;
        activity!.pesoRespuestas = pesoRespuestas ?? "";
        activity!.habilidades = habilidades;
        activity!.ejercicioImage = ejercicioImage ?? "";
        activity!.ejemploImage = ejemploImage ?? "";
        activity!.pista = pista ?? "";

        const activityCreated= await crearActividad(activity!);

        return Actividad.retornarActividad(activityCreated);
    }

    static async actualizarActividadService (userId: string, data: any): Promise<any> {

        const verifyActivity = await obtenerActividadId(userId);
        if (!verifyActivity) throw new ErrorActividadInexistente(); 
        await actualizarActividad(userId, data);
        return await obtenerActividadId(userId);

    }
}