import express from 'express';
import {
   getAnnouncements,
   createAnnouncements,
   deleteAnnouncement
} from '../controllers/announcementController.js';

const router = express.Router();

router
    .route('/')
    .get(getAnnouncements)
    .post(createAnnouncements);

router
    .route('/:id')
    .delete(deleteAnnouncement);

export default router;