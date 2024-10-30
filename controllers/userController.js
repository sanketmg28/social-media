// import bcrypt from 'bcrypt'; // Uncomment if you plan to hash passwords
import User from '../models/userModel.js';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Uncomment the following lines if using bcrypt for password hashing
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const newUser = await User.create({ name, email, password: hashedPassword });
        
        const newUser = await User.create({ name, email, password }); // Use hashed password if hashing is enabled
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findByEmailAndPassword(email, password);

        if (!user) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
};
