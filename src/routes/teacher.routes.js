import { Router } from "express";
import { signUpTeacherController, loginTeacherController, UpdateTeacherDetailsController } from "../controllers/teacher.controller.js";
import { auth } from "../middleware/auth.js";

export const teacherRouter = Router();

teacherRouter.post("/register", signUpTeacherController);
teacherRouter.post("/login", loginTeacherController);
teacherRouter.patch('/update', auth,UpdateTeacherDetailsController)
// teacherRouter.get("/profile");