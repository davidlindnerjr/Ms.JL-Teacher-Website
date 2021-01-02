import mongoose from 'mongoose';

const announcementSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        date: {
            type: Date
        }
    }, 
    {
        timestamps: true
})

const Announcement = mongoose.model('Announcement', announcementSchema);

export default Announcement;