import { Router } from 'express';

const formController = Router();

formController.get('/form', (req, res) => {
    res.render('form');
});

export default formController;
