import express from "express";
import { deleteStudent, getStudents } from "../controllers/student.controller.js";


const router = express.Router();

router.get("/", getStudents);
router.delete("/:id", deleteStudent);

export default router;