import express from "express";
import { createUser, getUsers, searchUsers } from "../controllers/user.controllers.js";


const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.get("/search", searchUsers);

export default router;