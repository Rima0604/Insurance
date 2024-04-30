import express from 'express';
import {login, register} from '../controllers/auth.controller.js';
const router = express.Router();

//register

router.post("/register",register)

router.post("/login",login)

//register as Admin
//router.post("/register-admin", registerAdmin)

export default router;