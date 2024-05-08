import { actualizarEstudiante, actualizarProfesor, crearUsuario, obtenerEstudianteId, obtenerEstudiantes, obtenerProfesorId, obtenerProfesores, obtenerUsuarioUsername } from "../dao/Usuario.dao";
import { Estudiante } from "../entities/Estudiante";
import { Profesor } from "../entities/Profesor";
import { Usuario } from "../entities/Usuario";
import Crypt from "bcryptjs";
import { ErrorUsuarioExistente, ErrorUsuarioInexistente, RegistroNoAutorizado } from "../util/ErroresException";
import { randomUUID } from "crypto";

export class UsuarioBaseService {
    static async obtenerEstudiantesService (): Promise<any[]> {
        return obtenerEstudiantes();   
    }
    static async obtenerProfesoresService (): Promise<any[]> {
        return obtenerProfesores();   
    }
    static async obtenerEstudianteIdService (id: string): Promise<Estudiante> {
        const user= await obtenerEstudianteId(id);
        if (!user) throw new ErrorUsuarioInexistente();
        return user;
    }
    static async obtenerProfesorIdService (id: string): Promise<Profesor> {
        const user= await obtenerProfesorId(id);
        if (!user) throw new ErrorUsuarioInexistente();
        return user;
    }
    static async crearUsuarioService (body: any): Promise<any> {

        const {username, password, nombre, rol, avatar, bio, genero} = body;

        if (rol=="admin") throw new RegistroNoAutorizado();

        const verifyUser = await obtenerUsuarioUsername(username, rol);
        if (verifyUser) throw new ErrorUsuarioExistente();

        const passwordEncrypt = await Crypt.hash(password, 10);
        
        
        let user: Usuario | Profesor | Estudiante;
        const id= randomUUID();

        switch (rol) {
            case "profesor":
                user = new Profesor();

                user.username = username;
                if (user instanceof Profesor){
                    user.avatar = avatar;
                    user.bio = bio;
                }
                
                break;
            case "estudiante":
                user = new Estudiante();

                user.username = nombre+"@"+id;
                if (user instanceof Estudiante){
                    user.avatar = avatar;
                    user.genero = genero;
                }
                
                break;
        }
        user!.id = id;
        user!.password = passwordEncrypt;
        user!.nombre = nombre;
        user!.rol = rol;
        
        console.log("Creando usuario");
        const userCreated = await crearUsuario(user!);

        return Usuario.retornarUsuario(userCreated);
    }
    
    static async actualizarEstudianteService (userId: string, data: any): Promise<any> {

        const verifyUser = await obtenerEstudianteId(userId);
        if (!verifyUser) throw new ErrorUsuarioInexistente(); 
        await actualizarEstudiante(userId, data);
        return await obtenerEstudianteId(userId);

    }

    static async actualizarProfesorService (userId: string, data: any): Promise<any> {

        const verifyUser = await obtenerProfesorId(userId);
        if (!verifyUser) throw new ErrorUsuarioInexistente(); 
        await actualizarProfesor(userId, data);
        return await obtenerProfesorId(userId);

    }

}
