import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import userModel from '../models/userModel.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if(!existingUser) return res.status(404).json({ message: "User doesn't exist"});

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if(!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials"});

    const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, 'test', { expiresIn: "1h"});

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wromg'});
  }
}

export const register = async (req, res) => {
  const { email, password, username, confirm } = req.body;

  try {
    const existingUser = await userModel.findOne({ email });

    if(existingUser) return res.status(400).json({ message: "User already exist"});

    if(password !== confirm) return res.status(400).json({ message: "Password don't match"});

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await userModel.create({ email, password: hashedPassword, username: username });

    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h"});

    res.status(200).json({ result: result, token });
  } catch (error) {
      res.status(500).json({ message: 'Something went wromg'});
  }
}