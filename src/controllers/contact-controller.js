import { Router } from 'express';
import contactHandler from '../handlers/contact-handler.js';

const contactController = Router();

contactController.get('/form', async (req, res) => {
    res.render('form');
});

contactController.post('/form', async (req, res) => {
    const newContact = req.body;
    await contactHandler.createContact(newContact);

    res.redirect('/');
});

export default contactController;
