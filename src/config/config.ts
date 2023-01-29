import { type Application } from 'express';
import { Pool } from 'pg';

const config = (app: Application, portNumber: number): void => {
    app.listen(portNumber, () => {
        console.log(`App now listening to PORT: ${portNumber}`);
    });
};


export const pool = new Pool({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
});

export default config;
