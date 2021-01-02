import asyncHandler from 'express-async-handler';
import CalendarEvent from '../models/calendarEventModel.js';

// desc: Get all calendar events
// route: GET /api/calendarEvents
// access: public
const getCalendarEvents = asyncHandler( async (req, res) => {

    const calendarEvents = await CalendarEvent.find({});

    res.json(calendarEvents);
})

// desc:  Add a  calendar event
// route: POST /api/calendarEvents
// access: private/admin
const addCalendarEvent = asyncHandler( async(req, res) => {

    const {
        title,
        link,
        date,
        description
    } = req.body;

    const newCalendarEvent = new CalendarEvent({
        title,
        link,
        date,
        description,
    })

    const createdCalendarEvent = await newCalendarEvent.save();
    res.status(201).json(createdCalendarEvent);
})

// desc: Delete a calendar event
// route: DELETE /api/calendarEvents/:id
//acccess: private/admin 

const deleteCalendarEvent = asyncHandler( async(req, res) => {

    const calendarEvent = await CalendarEvent.findById(req.params.id);

    if(calendarEvent){
        await calendarEvent.remove();
        res.json({ message: 'Event deleted from calendar' })
    } else {
        res.status(404);
        throw new Error('Event not found')
    }
})

export { getCalendarEvents, addCalendarEvent, deleteCalendarEvent }