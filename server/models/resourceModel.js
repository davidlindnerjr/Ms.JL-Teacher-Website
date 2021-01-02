import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        link: {
            type: String
        },
        date: {
            type: Date
        },
        description: {
            type: String
        },
    }, 
    {
        timestamps: true
})

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;