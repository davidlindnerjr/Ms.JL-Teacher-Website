import express from 'express';
import {
    getResources,
    addResource,
    deleteResource
} from '../controllers/resourceController.js';

const router = express.Router();

router
    .route('/')
    .get(getResources)
    .post(addResource);

router
    .route('/:id')
    .delete(deleteResource);

export default router;