import asyncHandler from 'express-async-handler';
import AdminUser from '../models/adminUserModel.js';
import generateToken from '../utils/generateToken.js';

// desc: Register a new admin user
// route: POST /api/adminUsers
// access: public

const registerAdminUser = asyncHandler( async (req, res) => {

    const {
        username,
        password
    } = req.body

    const adminUserExists = await AdminUser.findOne({username: username});

    if(adminUserExists){
        res.status(400);
        throw new Error('Admin user already exists');
    }

    const adminUser = await AdminUser.create({
        username,
        password
    })

    if(adminUser){

        res.status(201).json({
            _id: adminUser._id,
            username: adminUser.username,
            password: adminUser.password,
            isAdmin: adminUser.isAdmin,
            token: generateToken(adminUser._id)
        })

    } else {

        res.status(400);
        throw new Error('Invalid admin user');
    }
});

// desc: Login and authorize admin
// route: GET /api/adminUsers/login
// access: public
const loginAdminUser = asyncHandler(async (req, res) => {
    const {username, password} = req.body;
    
    //Find user by username
    const admin = await AdminUser.findOne({username: username});

    //match hash and submitted password
    if(admin && (await admin.matchPassword(password))){
        return res.json({
            _id: admin._id,
            username: admin.username,
            password: admin.password,
            isAdmin: admin.isAdmin,
            token: generateToken(admin._id),
        })
    } else {
        res.status(401);
        throw new Error('Invalid username or password');
    }

})

export { registerAdminUser, loginAdminUser };