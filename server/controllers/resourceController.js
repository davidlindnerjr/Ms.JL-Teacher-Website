import asyncHandler from 'express-async-handler';
import Resource from '../models/resourceModel.js';

// desc: Get all resources
// route: GET /api/resources
// access: public
const getResources = asyncHandler( async (req, res) => {

    const resources = await Resource.find({});

    res.json(resources);
})

// desc:  Add a resource
// route: POST /api/messages
// access: private/admin
const addResource = asyncHandler( async(req, res) => {

    const {
        title,
        link,
        description
    } = req.body;

    const newResource = new Resource({
        title,
        link,
        description,
        date: Date.now()
    })

    const createdResource = await newResource.save();
    res.status(201).json(createdResource);
})

// desc: Delete a resource
// route: DELETE /api/messages/:id
//acccess: private/admin 

const deleteResource = asyncHandler( async(req, res) => {

    const resource = await Resource.findById(req.params.id);

    if(resource){
        await resource.remove();
        res.json({ message: 'Resource deleted' })
    } else {
        res.status(404);
        throw new Error('Resource not found')
    }
})

export { getResources, addResource, deleteResource }