import { Router } from 'express';

const adminController = Router();

adminController.get('/admin', (req, res) => {
    res.render('admin');
});

export default adminController;
