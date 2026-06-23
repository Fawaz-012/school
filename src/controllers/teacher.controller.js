import { aToken } from "../lib/jwt.js";
import { signUpTeacherService, loginTeacherService, updateTeacherDetailsService } from "../services/teacher.services.js";
import { BadRequestError } from "../utils/app.error.js";
import { signUpTeacherSchema, loginTeacherSchema, updateTeacherDetailsSchema } from "../validators/teacher.js";


export const signUpTeacherController = async (req, res, next) => {
    try {

        const {error, value} = signUpTeacherSchema.validate(req.body);

        if(error) throw new BadRequestError(error.message);

        const {firstName, lastName, email, phone, t_classclass, password} = value;

        const teacher = await signUpTeacherService(value);

        return res.status(201).json({message: `Teacher registered suvccesfully`, teacher});

    } catch (error) {
        next(error)

    }
};

export const loginTeacherController = async (req, res, next) => {
    try {

        const {error, value} = loginTeacherSchema.validate(req.body);

        if(error) throw new BadRequestError(error.message);

        const teacher = await loginTeacherService(value);

        const token = aToken({id: teacher.id, email:teacher.email, t_class:teacher.t_class})

        return res.status(200).json({message: "Login successful", token});

    } catch (error) {
        next(error)
    }
};

export const UpdateTeacherDetailsController = async (req, res, next) => {
    try {
        const loggedInTeacher = req.user;

        console.log(loggedInTeacher)
        
        const {error, value} = updateTeacherDetailsSchema.validate(req.body);

        if(error) throw new BadRequestError(error.message);


        await updateTeacherDetailsService(value, loggedInTeacher.id);

        return res.status(200).json({message:"Updated successful"})

    } catch (error) {
        next(error)
    }
}