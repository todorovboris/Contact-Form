import { Router } from 'express';
import messageHandler from '../handlers/message-handler.js';

const messageController = Router();

messageController.get('/contact', async (req, res) => {
    res.render('contact');
});

messageController.post('/contact', async (req, res) => {
    const newContact = req.body;
    await messageHandler.createMessage(newContact);

    res.redirect('/');
});

messageController.get('/contact/:contactId/delete', async (req, res) => {
    const contactId = req.params.contactId;

    try {
        await messageHandler.deleteMessage(contactId);
    } catch (err) {
        console.log(err.message);
    }

    res.redirect('/admin');
});

export default messageController;
