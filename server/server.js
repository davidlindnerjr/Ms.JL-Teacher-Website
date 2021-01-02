import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import colors from 'colors';
import path from 'path';
import bodyParser from 'body-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Route Imports
import adminUserRoutes from './routes/adminUserRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js';
import calendarEventRoutes from './routes/calendarEventRoutes.js';

dotenv.config();

//Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 3001;
const app = express();

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/adminUsers', adminUserRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/calendarEvents', calendarEventRoutes);

const __dirname = path.resolve();

// Heroku
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })

} else {
    app.get('/', (req, res) => {
        res.send('API Running ... ');
    })
}


//Custom error handling
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on PORT: ${ PORT }`));