import express from "express";
import { deleteUser, getAllUsers, getById ,updateUser} from "../controllers/user.controller.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js";

const router = express.Router();

router.put('/update/:id',verifyAdmin, updateUser);

router.delete('/delete/:id', deleteUser);

router.get('/',getAllUsers);

router.get('/:id',verifyUser,getById);


export default router;

