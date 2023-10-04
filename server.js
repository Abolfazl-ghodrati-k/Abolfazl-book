import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import passport from 'passport';
import { generateToken, verifyToken } from './config/passport-config.js';
import configureSocketIO from './sockets/socket-io.js';
import dotenv from 'dotenv';

// routes
import authRoutes from './routes/auth-routes.js';
import roomRoutes from './routes/room-routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

// Passport.js setup
app.use(passport.initialize());

// API routes
app.use('/api', authRoutes);
app.use('/api', roomRoutes);
app.use('/', (_, res) => {
     return res.send("welcome to my app! documentation ->")
})

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Configure Socket.io
configureSocketIO(server);
