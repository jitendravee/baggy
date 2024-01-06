import { Router } from 'express';
import { signUp } from '../models/signUp.models.js';
import bcrypt from 'bcrypt';

const router = Router();

router.route('/').get(async (req, res) => {
    try {
        const userEmailId = await signUp.findOne({ emailId: req.body.emailId });

        
        bcrypt.compare(req.body.password, 'securePassword', function (error, result) {
            if (error) {
                res.status(500).json({ success: false, message: 'Error during password comparison' });
            } else {
                if (result && req.body.password !== signUp.password && req.body.emailId === userEmailId) {
                    res.json({ success: true, message: 'Signin not matched' });
                } else {
                    res.json({ success: false, message: 'signin successfull' });
                }
            }
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, message: error.message });
    }
});

export default router;
