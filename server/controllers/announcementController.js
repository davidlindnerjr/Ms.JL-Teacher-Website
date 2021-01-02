import asyncHandler from 'express-async-handler';
import Announcement from '../models/announcementModel.js';

// desc: Get all anouncements
// route: GET /api/announcements
// access: public
const getAnnouncements = asyncHandler( async (req, res) => {

    const announcements = await Announcement.find({});

    res.json(announcements);
})

// desc:  Submit an announcement
// route: POST /api/announcements
// access: private/admin

const createAnnouncements = asyncHandler( async(req, res) => {

        const {
            title
        } = req.body;

        const newAnnouncement = new Announcement({
            title,
            date: Date.now()
        })

        const createAnnouncement = await newAnnouncement.save();
        res.status(201).json(createAnnouncement);
})

// desc: Delete a message
// route: DELETE /api/messages/:id
//acccess: private/admin 

const deleteAnnouncement = asyncHandler( async(req, res) => {

    const announcement = await Announcement.findById(req.params.id);

    if(announcement){
        await announcement.remove();
        res.json({ message: 'Announcement deleted' })
    } else {
        res.status(404);
        throw new Error('Announcement not found')
    }
})


export { getAnnouncements, createAnnouncements, deleteAnnouncement };