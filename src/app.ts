import express from 'express';
import routes from './routes/index';
import config from './config/config';
import { PORT_NUMBER } from './constants';

const app = express();

app.use(express.json());

const initializeApp = (): void => {
    routes(app);
    config(app, PORT_NUMBER);
};

initializeApp();
