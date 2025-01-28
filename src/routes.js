import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home');
});

routes.get('/form', (req, res) => {
    res.render('form');
});

export default routes;
