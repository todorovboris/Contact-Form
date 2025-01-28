import { Router } from 'express';
import adminController from './controllers/admin-controller.js';
import formController from './controllers/form-controller.js';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home');
});

routes.use(adminController);
routes.use(formController);

export default routes;
