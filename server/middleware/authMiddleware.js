import jwt from 'jsonwebtoken';
import AdminUser from '../models/adminUserModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler (async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        console.log('token found')

        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            console.log(decoded);

            req.adminUser = await AdminUser.findById(decoded.id).select('-password');
            next();

        } catch(error) {
            console.log(error);
            res.status(401);
            throw new Error('Not authorized');
        }
    } 
    else if(!token){
        res.status(401);
        throw new Error('Not authorized, no token')
    }
})

const admin = (req, res, next) => {
    if(req.adminUser && req.adminUser.isAdmin){
        next();
    } else {
        res.status(401);
        throw new Error('Not authorized as an admin')
    }
}

export { protect, admin };