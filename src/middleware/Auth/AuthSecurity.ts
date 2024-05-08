import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { createResponse } from "../../util/ResponseJson";

export class AuthSecurity {

    static emitirToken(data: any) {

        const token = jwt.sign(
            {   
                nombre: data.usuario.nombre,
                rol: data.usuario.rol,
            },
            //Aca va la llave secreta
            String("lalala"),
            { expiresIn: "1d" }
        );
        return {
            token: token
        };
    }
    static analizarToken(req: Request, res: Response, next: NextFunction) {
        try {
            console.log("Analizando token");
            const llave = "lalala";
            const tokenRecibido = req.headers.authorization?.split(" ")[1] as string;

            if (!tokenRecibido) {
                createResponse(401, false, "Token no recibido", res);
            }

            const infoUsuario = jwt.verify(tokenRecibido, llave);
            req.body.datosUsuario = infoUsuario;
            next();
        } catch (error: any) {
            console.error(error);
            res.status(500).json({ respuesta: error.message});
        }
    }

    static verificarRol(rolesPermitidos: string[]) {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                // Verificar si el objeto datosUsuario existe en el cuerpo de la solicitud
                if (!req.body.datosUsuario) {
                    res.status(401).json({ respuesta: "Token no válido" });
                }
    
                // Obtener el rol del usuario desde el objeto datosUsuario
                const rolUsuario = req.body.datosUsuario.rol;
    
                // Verificar si el rol del usuario tiene permisos
                if (rolesPermitidos.includes(rolUsuario)) {
                    // El usuario tiene el rol adecuado, permitir el acceso
                    next();
                } else {
                    // El usuario no tiene el rol adecuado, denegar el acceso
                    res.status(403).json({ respuesta: "Acceso no autorizado" });
                }
            } catch (error) {
                console.error(error);
                res.status(500).json({ error: "Error interno del servidor al verificar rol" });
            }
        };
    }
}
