import mongoose from 'mongoose';

const calendarEventSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String
        },
        date: {
            type: String
        },
        description: {
            type: String
        },
    }, 
    {
        timestamps: true
})

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema);

export default CalendarEvent;