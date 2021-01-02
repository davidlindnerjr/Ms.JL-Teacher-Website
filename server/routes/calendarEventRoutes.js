import express from 'express';
import { addCalendarEvent, getCalendarEvents, deleteCalendarEvent } from '../controllers/calendarEventController.js';

const router = express.Router();

router
    .route('/')
    .get(getCalendarEvents)
    .post(addCalendarEvent)

router
    .route('/:id')
    .delete(deleteCalendarEvent);

export default router;