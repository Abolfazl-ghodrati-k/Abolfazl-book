import mongoose  from 'mongoose';

const roomSchema = new mongoose.Schema({
  name: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  members: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      role: {
        type: String,
        enum: ['owner', 'editor', 'viewer'],
        default: 'viewer', // Set the default role to 'viewer'
      },
    },
  ],
  // Other room-related fields as needed
});

export default mongoose.model('Room', roomSchema);
