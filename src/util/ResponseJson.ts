import {Response } from "express";
export function createResponse(statusCode: number, success: boolean, message: string, res: Response, data?: any): Response {
    return res.status(statusCode).json({
        success,
        message,
        data,
    });
}
