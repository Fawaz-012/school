import { registerStudentService, loginStudentService } from "../services/student.services.js";
import { BadRequestError } from "../utils/app.error.js";
import { registerStudentSchema, loginStudentSchema } from "../validators/student.js";
import{ aToken } from "../lib/jwt.js";

export const registerStudentController = async (req, res, next) => {
    try {
        const {error, value} = registerStudentSchema.validate(req.body);
        if(error) throw new BadRequestError(error.message);

        const student = await registerStudentService(value);

        return res.status(201).json({message: `Student registered successfully`, student});
    } catch (error) {
        next(error)
    }
}
export const loginStudentController = async (req, res, next) => {
    try {
        const {error, value} = loginStudentSchema.validate(req.body);
        if(error) throw new BadRequestError(error.message);

        const student = await loginStudentService(value);

        const token = aToken({id: student.id, email: student.email, t_class: student.t_class});

        return res.status(200).json({message: "Login successful", token});
    } catch (error) {
        next(error)
    }
}