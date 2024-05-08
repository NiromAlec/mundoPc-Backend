import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import 'dotenv/config'
// import cors from "cors";
import { AppDataSource } from "./ConexionDB-ORM";
import UsuarioRouter from "../routes/Usuario.router";
import AuthRouter from "../routes/Auth.router";
import ActividadRouter from "../routes/Actividad.router";
import { errorHandler } from "../middleware/HandlerErr";


class Servidor {
    app: express.Application;
    constructor() {
        this.app = express();
        this.iniciarConfig();
        this.iniciarRutas();
        
    }

    private iniciarConfig() {
        this.app.set('PORT', process.env.PORT ?? 3000);
        // this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.urlencoded());
        
    }
    private iniciarRutas() {
        
        this.app.use("/api/mundoPc/auth", AuthRouter);
        this.app.use("/api/mundoPc/usuario", UsuarioRouter);
        this.app.use("/api/mundoPc/actividad", ActividadRouter);
        this.app.use(errorHandler);
    }

    async iniciarServidor() {
        dotenv.config();
        //*implemetacion de mysql
        // await ConectionDB.connect()
        //     .then(() => {
        //         console.log('Base de datos conectada');
        //     })
        //     .catch((err) => {
        //         console.log("Error en la conexion: ", err);
        //     });
        //*Implementacion con TypeORM
        await AppDataSource.initialize()
            .then(() => {
                console.log('Base de datos conectada');
            })
            .catch((err) => {
                console.log("Error en la conexion: ", err);
            });
            
        this.app.listen(this.app.get('PORT'), () => {
            console.log(`Servidor escuchando en el puerto http://localhost:${this.app.get('PORT')}`);
        });
        
    }
}
//Clase Singleton
export default Servidor;