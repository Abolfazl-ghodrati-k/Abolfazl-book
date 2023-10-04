import express  from 'express';
import passport  from 'passport';
import {
  createRoom,
  getAllRooms,
  updateMemberRole,
  deleteRoom,
}  from '../controllers/room-controllers.js';

const router = express.Router();

// Create a new room
router.post('/rooms', passport.authenticate('jwt', { session: false }), createRoom);

// Get all rooms
router.get('/rooms', passport.authenticate('jwt', { session: false }), getAllRooms);

// Update a member's role in a room (owner only)
router.put('/rooms/:roomId/members/:memberId', passport.authenticate('jwt', { session: false }), updateMemberRole);

// Delete a room (owner only)
router.delete('/rooms/:roomId', passport.authenticate('jwt', { session: false }), deleteRoom);

export default router;
