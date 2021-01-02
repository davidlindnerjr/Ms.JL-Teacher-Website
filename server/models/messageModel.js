import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        date: {
            type: Date
        },
        email: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps: true
})

const Message = mongoose.model('Message', messageSchema);

export default Message;