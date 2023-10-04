import mongoose  from 'mongoose';

const userSchema = new mongoose.Schema({
     username: String,
     password: String,
     // Other user-specific fields
   });
   
   export default mongoose.model('User', userSchema);
   