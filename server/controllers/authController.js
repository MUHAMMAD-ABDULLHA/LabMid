import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

export const registerUser = async (req, res) => {
  // Log the incoming request for debugging
  console.log("Received registration data:", req.body);
  
  const { brandName, fullName, username, email, password, role, website, industry, description } = req.body;
  
  // For brandAdmin, use brandName as fullName if not provided
  const actualFullName = fullName || brandName || '';
  const actualUsername = username || email; // Use email as username if not provided
  
  // Validate required fields
  if (!actualFullName || !actualUsername || !email || !password || !role) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  
  // Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }
  
  try {
    // Determine approval based on role
    const isApproved = (role === 'brandAdmin' || role === 'influencer') ? false : true;
    
    console.log("Creating user object for:", email);
    // Create new user instance
    const user = new User({
      fullName: actualFullName,
      username: actualUsername,
      email,
      password, // model middleware handles hashing
      role,
      isApproved,
    });
    
    console.log("Saving user to database...");
    await user.save();
    console.log("User saved successfully with email:", user.email);
    
    res.status(201).json({
      success: true,
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      email: user.email,
      role: user.role,
      isApproved: user.isApproved,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ message: 'Invalid user data', error });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login attempt for email:", email);
    const user = await User.findOne({ email });
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    
    console.log("User found, checking password...");
    const isMatch = await user.matchPassword(password);
    
    if (isMatch) {
      console.log("Password matched, generating token...");
      res.json({
        success: true,
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        role: user.role,
        isApproved: user.isApproved,
        token: generateToken(user._id),
      });
    } else {
      console.log("Password comparison failed");
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

export const googleAuth = async (req, res) => {
  res.json({ message: "Google OAuth not implemented yet" });
};
