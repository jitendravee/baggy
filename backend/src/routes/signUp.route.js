import express from 'express'
import { Router } from 'react';
import { signUp } from '../models/signUp.models';
const router = express.Router()

router.post('/',async (res,req) => {
    try {
        const newSignUp  = {
userName: req.boby.userName,
emailId: req.boby.emailId,
password: req.boby.password,
        };
        const SignUp = await signUp.create(newSignUp);

        return response.status(201).send(signUp);

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
})

export default router