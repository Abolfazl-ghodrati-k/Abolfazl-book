import express  from 'express';
import passport  from 'passport';
import { registerUser, loginUser }  from '../controllers/auth-controllers.js';

const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', passport.authenticate('local', { session: false }), loginUser);

export default router;
