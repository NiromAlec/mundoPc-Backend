import { Request, Response } from "express";
import { AuthSecurity } from "../middleware/Auth/AuthSecurity";
import { AuthService } from "../services/Auth.service";
import { createResponse } from "../util/ResponseJson";
import { catchedAsync } from "../middleware/HandlerErr";
class AuthController {

    iniciarSesion= catchedAsync(async (req: Request, res: Response) => {
        const verificarCredenciales = await AuthService.verificarInicioSesion(req.body);

        let token = AuthSecurity.emitirToken(verificarCredenciales);

        return createResponse(200, true, verificarCredenciales.message, res, token);
    })

}

export default new AuthController();
