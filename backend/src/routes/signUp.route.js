import express from 'express';
import { Router } from 'express';
import { signUp } from '../models/signUp.models.js';
import bcrypt from 'bcrypt';

const router = Router();

router.route('/').post(async (req, res) => {
    try {
        const { userName, emailId, password } = req.body;

        if (!userName || !emailId || !password) {
            return res.status(400).json({ message: 'Please provide all required fields.' });
        }
        const saltRounds = 10;
        const securePassword = await bcrypt.hash(password, saltRounds);

        const newSignUp = {
            userName: userName,
            emailId: emailId,
            password: securePassword,
        };

        const createdSignUp = await signUp.create(newSignUp);

        return res.status(201).json(createdSignUp);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default router;
