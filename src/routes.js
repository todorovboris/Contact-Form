import { Router } from 'express';
import adminController from './controllers/admin-controller.js';
import contactController from './controllers/contact-controller.js';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home');
});

routes.use(adminController);
routes.use(contactController);

export default routes;
