
import { NextFunction, Request, Response } from "express";
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number;
                email: string;
            };
        }
    }
}
export const authorization = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');

    if(!token) {
        return res.unauthorized("Unauthorized");
    }

    // logic to verify token & attach decoded and other user info to req object
    const user = {
        id: 1,
        email: 'foo@bar.com'
    }
    

    req.user = user;
    next();
}