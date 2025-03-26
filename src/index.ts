import express from 'express';
import { json } from 'body-parser';
import router from '@/routes';
import { customResponses } from '@/middleware/customResponse';
import dotenv from 'dotenv';

import { errorHandler } from '@/middleware/errorHandler';
dotenv.config();

const app = express();

app.use(json());
app.use(customResponses);
app.use('/api/users/', router);

app.use(errorHandler);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started at 3000!!!!");
})