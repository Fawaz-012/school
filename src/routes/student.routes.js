import { Router } from "express";
import { registerStudentController, loginStudentController } from "../controllers/student.controller.js";
import { auth } from "../middleware/auth.js";

export const studentRouter = Router();

studentRouter.post("/register", auth, registerStudentController);
studentRouter.post("/login", loginStudentController);