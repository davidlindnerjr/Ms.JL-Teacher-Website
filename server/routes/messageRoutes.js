import express from 'express';
import { 
    getMessages, 
    getMessagesById, 
    sendMessage, 
    deleteMessage 
} from '../controllers/messageController.js';
const router = express.Router();

router
    .route('/')
    .get(getMessages)
    .post(sendMessage);

router
    .route('/:id')
    .get(getMessagesById)
    .delete(deleteMessage);

export default router;