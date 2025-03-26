import { NextFunction, Request, Response } from 'express';
import { SignupSchema } from '../../Types/auth/SignupSchema';



export const singUpValidator = (req: Request, res: Response, next: NextFunction) => {
    const {error, success} = SignupSchema.safeParse(req.body);

    if(!success) {
        return res.invalidPayload("Invalid payload", error);
       
    }
    
    next();
}