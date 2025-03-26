import { Response, NextFunction, Request } from 'express';
import { EStatusCodes } from '../utils/StatusCodes';

declare module 'express-serve-static-core' {
    interface Response {
        invalidPayload: (message: string, error: any) => void;
        success: (message: string, data?: any) => void;
        created: (message: string, data?: any) => void;
        serverError: (data?: any) => void;
        unauthorized: (message: string, data?: any) => void;
    }
}

export const customResponses = (req: Request, res: Response, next: NextFunction) => {
    res.invalidPayload = (message: string = 'Incorrect payload', error: any) => {
        res.status(EStatusCodes.UNPROCESSABLE_ENTITY).json({
            message,
            error
        });
    };

    res.unauthorized = () => {
        res.status(EStatusCodes.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }

    res.success = (message: string = "Success", data?: any) => {
        res.status(EStatusCodes.SUCCESS).json({ message, data });
    };

    res.created = (message: string = "Resource created", data? : any) => {
        res.status(EStatusCodes.CREATED).json({ message, data });
    };

    res.serverError = (data?: any) => {
        res.status(EStatusCodes.SERVER_ERROR).json({ message: 'Something went wrong', data });
    };

    next();
};