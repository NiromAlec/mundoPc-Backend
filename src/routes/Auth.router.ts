import { Router } from "express";
import authController from "../controller/Auth.controller";

class AuthRouter {
    //variable tipo Router
    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    private routes(): void {
        this.router.post("/login", authController.iniciarSesion ); 
    }
}

export default new AuthRouter().router;