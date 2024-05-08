import { NextFunction, Request, Response } from "express";
import { createResponse } from "../util/ResponseJson";
import { ErrorCustomException } from "../util/ErroresException";

export const catchedAsync = (fn: (req: Request, res: Response) => Promise<any>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res)
            .catch((err) => next(err));
    };
};
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ErrorCustomException) {
        return createResponse(err.statusCode, false, err.message, res);
    } else {
        return createResponse(500, false, "Error interno del servidor", res);
    }
};