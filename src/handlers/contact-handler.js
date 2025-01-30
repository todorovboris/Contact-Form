import Message from '../Models/Messages.js';

export default {
    getAllMessages() {
        let contacts = Message.find({}).sort({ date: -1 });
        return contacts;
    },
    async deleteMessage(contactId) {
        await Message.findByIdAndDelete({ _id: contactId });
    },
    async createMessage(contactData) {
        const newContact = Message.create({
            ...contactData,
        });

        return newContact;
    },
};
