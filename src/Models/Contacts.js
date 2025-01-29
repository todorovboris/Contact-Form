import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
});

const Contact = model('Contact', contactSchema);

export default Contact;
