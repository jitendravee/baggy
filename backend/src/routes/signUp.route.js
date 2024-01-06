import express from 'express';
import { Router } from 'express';  
import { signUp } from '../models/signUp.models.js';
import bcrypt from 'bcrypt';
const router = Router();

router.route('/').post(async (req, res) => { 
    try {
const securePassword = await bcrypt.hash(req.body.password, 10);

        const newSignUp = {
       userName:req.body.userName,
            emailId: req.body.emailId,
            password: securePassword,
        };
        const createdSignUp = await signUp.create(newSignUp);

        return res.status(201).send(createdSignUp);  

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;
