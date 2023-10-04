import bcrypt  from 'bcrypt';
import { generateToken }  from '../config/passport-config.js';
import User  from'../models/User.js';

// User registration
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    return res.status(500).json({ error: 'Error during registration' });
  }
};

// User login
const loginUser = (req, res) => {
  const token = generateToken(req.user);
  res.status(200).json({ token });
};

export {
  registerUser,
  loginUser,
};
