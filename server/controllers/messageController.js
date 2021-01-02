import asyncHandler from 'express-async-handler';
import Message from '../models/messageModel.js';

// desc: Get all mesages
// route: GET /api/messages
// access: private/admin
const getMessages = asyncHandler( async (req, res) => {

    const messages = await Message.find({});

    res.json(messages);
})

// desc: Get a message by id
// route: GET /api/messages/:id
const getMessagesById = asyncHandler( async (req, res) => {

    const messages = await Message.findById(req.params.id);

    if(messages){
        res.json(messages);
    } else {
        res.status(404);
        throw new Error('No messages found');
    }

})

// desc:  Submit a message
// route: POST /api/messages
// access: public

const sendMessage = asyncHandler( async(req, res) => {

        const {
            name,
            email,
            message
        } = req.body;

        const newMessage = new Message({
            name,
            email,
            message,
            date: Date.now()
        })

        const createdMessage = await newMessage.save();
        res.status(201).json(createdMessage);
})

// desc: Delete a message
// route: DELETE /api/messages/:id
//acccess: private/admin 

const deleteMessage = asyncHandler( async(req, res) => {

    const message = await Message.findById(req.params.id);

    if(message){
        await message.remove();
        res.json({ message: 'Message deleted' })
    } else {
        res.status(404);
        throw new Error('Message not found')
    }
})


export { getMessages, getMessagesById, sendMessage, deleteMessage };
