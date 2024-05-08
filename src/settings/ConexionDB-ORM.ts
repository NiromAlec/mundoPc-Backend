import { DataSource } from "typeorm";
import { Usuario } from "../entities/Usuario";
import { Estudiante } from "../entities/Estudiante";
import { Profesor } from "../entities/Profesor";
import { Actividad } from "../entities/Actividad";
import { Cuestionario } from "../entities/Cuestionario";
import { Laberinto } from "../entities/Laberinto";
import { Desconectada } from "../entities/Desconectada";
import { Seguimiento } from "../entities/Seguimiento";
import { Curso } from "../entities/Curso";
import { Unidad } from "../entities/Unidad";
import { Respuesta } from "../entities/Respuesta";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "172.29.47.183",
    port: 3306,
    username: "root",
    password: "1234",
    database: "flutter",
    entities:[
        Usuario, Estudiante, Profesor, 
        Actividad, Cuestionario, Laberinto, 
        Desconectada, Seguimiento, Curso, 
        Unidad, Respuesta
    ],
    // logging: true,
    dropSchema: true,
    synchronize: true,
})