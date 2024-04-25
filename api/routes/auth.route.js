import express from 'express';
import {signup, signin, signout,login } from '../controllers/auth.controller.js';
import {sendotp, verifyotp} from '../controllers/otp.controller.js'

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/sendotp", sendotp)
router.post("/verifyotp", verifyotp)
router.post("/login", login)

export default router;