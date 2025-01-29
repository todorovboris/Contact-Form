import { Router } from 'express';

const contactController = Router();

contactController.get('/form', (req, res) => {
    res.render('form');
});

contactController.post('/form', async (req, res) => {
    const formData = req.body;
});

export default contactController;
