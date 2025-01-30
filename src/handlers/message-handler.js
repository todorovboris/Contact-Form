import Message from '../Models/Messages.js';

export default {
    getAllMessages() {
        let messages = Message.find({}).sort({ date: -1 });
        return messages;
    },
    createMessage(contactData) {
        const newMessage = Message.create({
            ...contactData,
        });

        return newMessage;
    },
    async deleteMessage(contactId) {
        await Message.findByIdAndDelete({ _id: contactId });
    },
};
