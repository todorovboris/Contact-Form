import { Router } from 'express';
import contactHandler from '../handlers/contact-handler.js';
import 'dotenv/config';

const adminController = Router();

const adminEmail = process.env.ADMIN_EMAIL;
const adminPass = process.env.ADMIN_PASSWORD;
let isAuthenticated = false;

adminController.get('/admin', async (req, res) => {
    let contacts = await contactHandler.getAllMessages();

    res.render('admin', { contacts, isAuthenticated });
});

adminController.post('/admin', (req, res) => {
    const admin = req.body;

    if (admin.email === adminEmail && admin.password === adminPass) {
        isAuthenticated = true;
        return res.redirect('/admin');
    } else {
        return res.render('admin', { error: 'Invalid email or password!' });
    }
});

adminController.post('/admin-logout', async (req, res) => {
    isAuthenticated = false;
    res.redirect('/admin');
});

export default adminController;
