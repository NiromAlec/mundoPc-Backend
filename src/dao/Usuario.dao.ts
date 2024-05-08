import { Estudiante } from "../entities/Estudiante";
import { Profesor } from "../entities/Profesor";
import { Usuario } from "../entities/Usuario";
import { AppDataSource } from "../settings/ConexionDB-ORM";


export async function obtenerEstudiantes (): Promise<any[]> {
    return await AppDataSource.manager.find(Estudiante);
}
export async function obtenerProfesores (): Promise<any[]> {
    return await AppDataSource.manager.find(Profesor);
}

export async function obtenerEstudianteId (id: string): Promise<Estudiante | null> {
    return await AppDataSource.manager.findOneBy(Estudiante, {id: id});
}
export async function obtenerProfesorId (id: string): Promise<Profesor | null> {
    return await AppDataSource.manager.findOneBy(Profesor, {id: id});
}

export async function obtenerUsuarioUsername (username: string, role: string): Promise<Usuario | Profesor | Estudiante | null> {
    if (role == "profesor") {
        return await AppDataSource.manager.findOneBy(Profesor, {username: username});
    } else if (role == "estudiante") {
        return await AppDataSource.manager.findOneBy(Estudiante, {username: username});
    }else if (role == "admin") {
        return await AppDataSource.manager.findOneBy(Usuario, {username: username});
    }else {
        return null;
    }

}
export async function crearUsuario (user: Usuario): Promise<Usuario> {
    return await AppDataSource.manager.save(user);
}

export async function actualizarEstudiante (userId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Estudiante, userId, data);
}
export async function actualizarProfesor (userId: string, data: any): Promise<any> {
    return await AppDataSource.manager.update(Profesor, userId, data);
}