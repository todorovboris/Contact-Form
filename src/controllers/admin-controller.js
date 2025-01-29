import { Router } from 'express';
import contactHandler from '../handlers/contact-handler.js';
import 'dotenv/config';

const adminController = Router();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASSWORD;
let isAuthenticated = false;

adminController.post('/admin', async (req, res) => {
    const admin = req.body;

    if (admin.email === adminEmail && admin.password === adminPass) {
        isAuthenticated = true;
        return res.redirect('/admin');
    } else {
        return res.render('admin', { error: 'Invalid email or password!' });
    }
});

adminController.get('/admin', async (req, res) => {
    let contacts = await contactHandler.getAllContacts();

    res.render('admin', { contacts, isAuthenticated });
});

export default adminController;
