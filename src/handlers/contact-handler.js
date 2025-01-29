import Contact from '../Models/Contacts.js';

export default {
    getAllContacts() {
        let contacts = Contact.find({});
        return contacts;
    },
    async getOneContact(contactId) {
        await Contact.findByIdAndDelete({ _id: contactId });
    },
    async createContact(contactData) {
        const newContact = Contact.create({
            ...contactData,
        });

        return newContact;
    },
};
