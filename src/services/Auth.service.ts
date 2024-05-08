import Crypt from "bcryptjs";
import { obtenerUsuarioUsername } from "../dao/Usuario.dao";
import { ErrorCredencialesIncorrectas, ErrorContrasenaIncorrecta } from "../util/ErroresException";
import { identificarRol } from "../util/validations";
export class AuthService {
    public static async verificarInicioSesion(body: any): Promise<any> {

        const { username, password } = body;
        const rol = identificarRol(username);
        const verificarCredenciales = await obtenerUsuarioUsername(username, rol);
        console.log(verificarCredenciales);

        if (!verificarCredenciales) {
            throw new ErrorCredencialesIncorrectas();
        }

        const verificarContrasena = await Crypt.compare(password, verificarCredenciales.password);

        if (!verificarContrasena) {
            throw new ErrorContrasenaIncorrecta();
        }

        return { status: 200, message: "Inicio de sesion exitoso", usuario: verificarCredenciales };

    }
}