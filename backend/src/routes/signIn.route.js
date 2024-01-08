

import { Router } from 'express';
import { signUp } from '../models/signUp.models.js';
import bcrypt from 'bcrypt';

const router = Router();

router.route('/').post(async (req, res) => {
  try {
    const user = await signUp.findOne({ emailId: req.body.emailId });

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    bcrypt.compare(req.body.password, user.password, function (error, result) {
      if (error) {
        res.status(500).json({ success: false, message: 'Error during password comparison' });
      } else {
        if (result) {
          res.json({ success: true, message: 'Signin successful' });
        } else {
          res.json({ success: false, message: 'Signin not matched' });
        }
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
});

export default router;
