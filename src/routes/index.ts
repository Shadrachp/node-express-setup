import { type Application, type Request, type Response } from 'express';

const routes = (router: Application): void => {
    router.get('/', (_: Request, res: Response) => {
        res.send('Hello');
    });

    router.post('/', (req: Request, res: Response) => {
        res.send(req.body);
    });
};

export default routes;
