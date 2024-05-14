// curso.service.ts
import { actualizarCurso, crearCurso, obtenerCursoId, obtenerCursos } from "../dao/Curso.dao";
import { Curso } from "../entities/Curso";
import { ErrorCursoInexistente } from "../util/ErroresException";

export class CursoService {
    static async obtenerCursosService(): Promise<Curso[]> {
        return obtenerCursos();
    }

    static async obtenerCursoIdService(id: string): Promise<Curso> {
        const curso = await obtenerCursoId(id);
        if (!curso) throw new ErrorCursoInexistente();
        return curso;
    }

    static async crearCursoService(body: any): Promise<Curso> {
        const nuevoCurso = new Curso();
        // Asignar valores del body al nuevo curso
        const { nombre, codigoAcceso, departamento, ciudad, colegio, portada, numEstudiantes, descripcion, fechaCreacion, fechaFinalizacion, estado } = body;
        nuevoCurso.nombre = nombre;
        nuevoCurso.codigoAcceso = codigoAcceso;
        nuevoCurso.departamento = departamento;
        nuevoCurso.ciudad = ciudad;
        nuevoCurso.colegio = colegio;
        nuevoCurso.portada = portada;
        nuevoCurso.numEstudiantes = numEstudiantes;
        nuevoCurso.descripcion = descripcion;
        nuevoCurso.fechaCreacion = fechaCreacion;
        nuevoCurso.fechaFinalizacion = fechaFinalizacion;
        nuevoCurso.estado = estado;

        const cursoCreado = await crearCurso(nuevoCurso);
        return cursoCreado;
    }

    static async actualizarCursoService(cursoId: string, data: any): Promise<any> {
        const verificarCurso = await obtenerCursoId(cursoId);
        if (!verificarCurso) throw new ErrorCursoInexistente();
        
        await actualizarCurso(cursoId, data);
        return await obtenerCursoId(cursoId);
    }
}
