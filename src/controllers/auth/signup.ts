import { Request, Response } from 'express';
import { SignupSchema } from '@/Types/auth/SignupSchema';
import z from 'zod';

export const SignupController  = async (req: Request, res: Response) => {
    const body = req.body as (z.infer<typeof SignupSchema>);
    

    return res.created("User Created Successfully", body);
    
};