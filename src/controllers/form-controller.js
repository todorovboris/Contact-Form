import { Router } from 'express';

const formController = Router();

formController.get('/form', (req, res) => {
    res.render('form');
});

formController.post('/form', async (req, res) => {
    const formData = req.body;
});

export default formController;
