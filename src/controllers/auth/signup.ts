import { Request, Response } from 'express';
import { genSaltSync, hashSync } from 'bcrypt'
import { SignupSchema } from '@/Types/auth/SignupSchema';
import z from 'zod';
import prisma from "@db";

export const SignupController  = async (req: Request, res: Response) => {
    const body = req.body as (z.infer<typeof SignupSchema>);
    
    const user = await prisma.user.create({
        data: {
            email: body.email,
            username: body.username,
            password: hashSync(body.password, genSaltSync(10))
        },
        omit: {
            password: false
        }
    });
    return res.created("User Created Successfully", user);
    
};