import Contact from '../Models/Contacts.js';

export default {
    getAllContacts() {
        let contacts = Contact.find({}).sort({ date: -1 });
        return contacts;
    },
    async deleteContact(contactId) {
        await Contact.findByIdAndDelete({ _id: contactId });
    },
    async createContact(contactData) {
        const newContact = Contact.create({
            ...contactData,
        });

        return newContact;
    },
};
