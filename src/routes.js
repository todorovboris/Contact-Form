import { Router } from 'express';
import adminController from './controllers/admin-controller.js';
import messageController from './controllers/message-controller.js';

const routes = Router();

routes.get('/', (req, res) => {
    res.render('home');
});

routes.use(adminController);
routes.use(messageController);

export default routes;
