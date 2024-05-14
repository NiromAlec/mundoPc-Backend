// curso.dao.ts
import { Curso } from "../entities/Curso";
import { AppDataSource } from "../settings/ConexionDB-ORM";

export async function obtenerCursos(): Promise<Curso[]> {
    return await AppDataSource.manager.find(Curso);
}

export async function obtenerCursoId(id: string): Promise<Curso | null> {
    return await AppDataSource.manager.findOneBy(Curso, { id: id });
}

export async function crearCurso(curso: Curso): Promise<Curso> {
    return await AppDataSource.manager.save(curso);
}

export async function actualizarCurso(cursoId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Curso, cursoId, data);
}
