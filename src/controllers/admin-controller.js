import { Router } from 'express';
import contactHandler from '../handlers/contact-handler.js';

const adminController = Router();

adminController.get('/admin', async (req, res) => {
    let contacts = await contactHandler.getAllContacts();

    res.render('admin', { contacts });
});

export default adminController;
