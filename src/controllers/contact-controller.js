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

contactController.get('/form/:formId/delete', async (req, res) => {
    const contactId = req.params.formId;
    try {
        await contactHandler.getOneContact(contactId);
    } catch (err) {
        console.log(err.message);
    }

    res.redirect('/admin');
});

export default contactController;
