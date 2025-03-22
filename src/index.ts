import express from 'express';
import { json } from 'body-parser';
import { userRoutes } from './routes';
import { customResponses } from './middleware/customeResponse';

const app = express();

app.use(json());
app.use(customResponses);
app.use('/api/users/', userRoutes);

app.listen(3000, () => {
    console.log("Auth Server started at 3000!!!!");
})