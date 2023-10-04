import Room  from '../models/Room.js';

// Create a new room
const createRoom = async (req, res) => {
  const { name } = req.body;

  try {
    const newRoom = new Room({ name, owner: req.user._id, members: [{ user: req.user._id, role: 'owner' }] });
    await newRoom.save();

    return res.status(201).json({ room: newRoom });
  } catch (error) {
    return res.status(500).json({ error: 'Error creating the room' });
  }
};

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('owner').populate('members.user');
    return res.status(200).json({ rooms });
  } catch (error) {
    return res.status(500).json({ error: 'Error fetching rooms' });
  }
};

// Update a member's role in a room (owner only)
const updateMemberRole = async (req, res) => {
  const { roomId, memberId } = req.params;
  const { role } = req.body;

  try {
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    if (room.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Permission denied. Only the owner can change member roles.' });
    }

    const member = room.members.find((m) => m.user.toString() === memberId);

    if (!member) {
      return res.status(404).json({ error: 'Member not found in the room' });
    }

    member.role = role;
    await room.save();

    return res.status(200).json({ room });
  } catch (error) {
    return res.status(500).json({ error: 'Error updating member role' });
  }
};

// Delete a room (owner only)
const deleteRoom = async (req, res) => {
  const { roomId } = req.params;

  try {
    const room = await Room.findById(roomId);

    if (!room) {
      return res.status(404).json({ error: 'Room not found' });
    }

    if (room.owner.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Permission denied. Only the owner can delete the room.' });
    }

    await room.remove();

    return res.status(200).json({ message: 'Room deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: 'Error deleting the room' });
  }
};

export {
  createRoom,
  getAllRooms,
  updateMemberRole,
  deleteRoom,
};
