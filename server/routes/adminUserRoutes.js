import express from 'express';
import { protect, admin } from '../middleware/authMiddleware.js';
import { registerAdminUser, loginAdminUser } from '../controllers/adminUserController.js';

const router = express.Router();

router
    .post('/login', loginAdminUser);

router
    .route('/')
    .post(registerAdminUser);


export default router;