import { Schema, model } from 'mongoose';

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
});

const Message = model('Message', contactSchema);

export default Message;
