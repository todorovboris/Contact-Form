import { Router } from 'express';
import contactHandler from '../handlers/contact-handler.js';

const contactController = Router();

contactController.get('/contact', async (req, res) => {
    res.render('contact');
});

contactController.post('/contact', async (req, res) => {
    const newContact = req.body;
    await contactHandler.createContact(newContact);

    res.redirect('/');
});

contactController.get('/contact/:contactId/delete', async (req, res) => {
    const contactId = req.params.contactId;

    try {
        await contactHandler.deleteContact(contactId);
    } catch (err) {
        console.log(err.message);
    }

    res.redirect('/admin');
});

export default contactController;
