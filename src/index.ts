import express from 'express';
import { json } from 'body-parser';
import { userRoutes } from './routes';
import { customResponses } from './middleware/customeResponse';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(json());
app.use(customResponses);
app.use('/api/users/', userRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Auth Server started at 3000!!!!");
})