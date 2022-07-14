import type {Request, Response, NextFunction} from "express";

export function logRequest(req: Request, res: Response, next: NextFunction) {
    console.info(`Received ${req.method} request on ${req.url}`);
    next();
}
