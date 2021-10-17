import express from 'express';
import cors from 'cors';

import errorMiddleware from './shared/middlewares/errors.js';
import corsOptions from './shared/middlewares/cors.js';

import routes from './routes/index.js';

const app = express();

app.use(express.json());
app.use(cors(corsOptions));


routes.forEach((route) => {
    app.use(route);
});

app.get('/api/v1', (req, res) => {
    /* eslint-disable no-undef */
    const envs = process.env
    res.send(`Running = ${JSON.stringify(envs)}`);
});

app.use(errorMiddleware);

export default app;