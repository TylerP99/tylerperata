const AsyncHandler = require("express-async-handler");

const Contact = require("../models/Contact");

const getAllContacts = AsyncHandler(async (req, res) => {
    const contacts = await Contact.find();

    if(!contacts) return res.status(404).json({error: "No contacts found."});

    return res.status(200).json(contacts);
});

const createContact = AsyncHandler(async (req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message) return res.status(400).json({error: "All fields are required."});

    const contact = await Contact.create({name, email, message});

    if(!contact) return res.status(500).json({error: "Server error, please try again."});

    return res.status(201).json(contact);
});

const setContactReplied = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { replied } = req.body;

    console.log(replied);

    const contact = await Contact.findByIdAndUpdate(id, {replied}, {new: true});

    console.log(contact);

    if(!contact) return res.status(404).json({error: "That contact was not found."});

    return res.status(200).json(contact);
});

const deleteContact = AsyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id) return res.status(400).json({error: "Contact not found."});

    const contact = await Contact.findByIdAndDelete(id);

    if(!contact) return res.status(400).json({error: "Contact not found."});

    return res.status(200).json(contact);
});

module.exports = {
    getAllContacts,
    createContact,
    setContactReplied,
    deleteContact,
}