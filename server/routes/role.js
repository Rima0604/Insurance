import express from "express";
import { createRole, updateRole, getAllRoles, deleteRole } from '../controllers/role.controller.js';
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post('/create' ,verifyAdmin, createRole);
//Update role in DB
router.put('/update/:id',verifyAdmin, updateRole);

router.get('/getAll', getAllRoles);

router.delete("/delete/:id" , deleteRole);

export default router;