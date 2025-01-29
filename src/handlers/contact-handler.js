import Contact from '../Models/Contacts.js';

export default {
    getAllContacts() {
        let contacts = Contact.find({});
        return contacts;
    },
    async createContact(contactData) {
        const newContact = Contact.create({
            ...contactData,
        });

        return newContact;
    },
};
