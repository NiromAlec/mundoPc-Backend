import { Response } from "express";

// Definición de la interfaz para los datos del error
interface ErrorData {
    code: number;
    description: string;
    // Otros datos relevantes
}

// Clase base para manejar errores
export class ErrorCustomException extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }

}

// Clase para el error de credenciales incorrectas
export class ErrorCredencialesIncorrectas extends ErrorCustomException {
    constructor() {
        super("Credenciales incorrectas", 401);
    }
}

// Clase para el error de contraseña incorrecta
export class ErrorContrasenaIncorrecta extends ErrorCustomException {
    constructor() {
        super("Contraseña incorrecta", 401);
    }
}

// Clase para el error de usuario existente
export class ErrorUsuarioExistente extends ErrorCustomException {
    constructor() {
        super("El usuario ya existe", 409);
    }
}

// Clase para el error de usuario inexistente
export class ErrorUsuarioInexistente extends ErrorCustomException {
    constructor() {
        super("El usuario no existe", 404);
    }
}

// Clase para el error de actividad existente
export class ErrorActividadExistente extends ErrorCustomException {
    constructor() {
        super("La actividad ya existe", 409);
    }
}

export class ErrorActividadInexistente extends ErrorCustomException {
    constructor() {
        super("La actividad no existe", 404);
    }
}

export class ErrorUnidadInexistente extends ErrorCustomException {
    constructor() {
        super("La unidad no existe", 404);
    }
}

export class RegistroNoAutorizado extends ErrorCustomException {
    constructor() {
        super("No está autorizado para realizar esta acción", 403);
    }
}

