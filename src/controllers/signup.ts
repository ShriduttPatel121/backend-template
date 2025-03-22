import { Request, RequestHandler, Response } from 'express';
import { SignupSchema } from '../Types/SignupSchema';

export const SignupController  = async (req: Request, res: Response) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);
    if (parsedData.error) {
        return res.invalidPayload("Invalid Payload", parsedData.error);
        
    }

    return res.created("User Created Successfully", parsedData.data);
    
};