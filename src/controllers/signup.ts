import { Request, RequestHandler, Response } from 'express';
import { SignupSchema } from '../Types/SignupSchema';
import { PrismaClient } from '@prisma/client';
import { hashSync, genSaltSync } from 'bcrypt'

const prisma = new PrismaClient();

export const SignupController  = async (req: Request, res: Response) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);
    if (parsedData.error) {
        return res.invalidPayload("Invalid Payload", parsedData.error);
        
    }

    const user = await prisma.user.create({
        data: {
            email: parsedData.data.email,
            password: hashSync(parsedData.data.password, genSaltSync(+(process.env.SALT_ROUNDS as string))),
            username: parsedData.data.username
        }
    })

    return res.created("User Created Successfully", user);
};