import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import adminUsers from './data/adminUsers.js';
import AdminUser from './models/AdminUserModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
    try {
        //Clear Database before importing
        await AdminUser.deleteMany();

        await AdminUser.insertMany(adminUsers);

        console.log('Data Imported'.green.inverse);
    } catch(err) {
        console.error(`${err}`.red.underlined);
        process.exit(1);
    }
}

const destroytData = async () => {
    try {
        //Clear Database before importing
        await AdminUser.deleteMany();

        console.log('Data Deleted'.red.inverse);
    } catch(err) {
        console.error(`${err}`.red.underlined);
        process.exit(1);
    }
}

if (process.argv[2] === '-d'){
    destroytData();
} else {
    importData();
}