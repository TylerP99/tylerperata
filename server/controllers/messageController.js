const AsyncHandler = require("express-async-handler");

const Message = require("../models/Message");

const getAllMessages = AsyncHandler(async (req, res) => {
    const messages = await Message.find();

    if(!messages) return res.status(404).json({error: "No messages found."});

    return res.status(200).json(messages);
});

const createMessage = AsyncHandler(async (req, res) => {
    const {name, email, content} = req.body;

    if(!name || !email || !content) return res.status(400).json({error: "All fields are required."});

    const message = await Message.create({name, email, content});

    if(!message) return res.status(500).json({error: "Server error, please try again."});

    return res.status(201).json(message);
});

const setMessageReplied = AsyncHandler(async (req, res) => {
    const { id } = req.params;
    const { replied } = req.body;

    const replyStatus = (replied === "true") ? false : true;
    const message = await Message.findByIdAndUpdate(id, {replied: replyStatus}, {new: true});

    if(!message) return res.status(404).json({error: "That message was not found."});

    return res.status(200).json(message);
});

const deleteMessage = AsyncHandler(async (req, res) => {
    const { id } = req.params;

    if(!id) return res.status(400).json({error: "Message not found."});

    const message = await Message.findByIdAndDelete(id);

    if(!message) return res.status(400).json({error: "Message not found."});

    return res.status(200).json(message);
});

module.exports = {
    getAllMessages,
    createMessage,
    setMessageReplied,
    deleteMessage,
}