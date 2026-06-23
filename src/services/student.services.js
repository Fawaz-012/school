import { findStudentByEmail, saveStudentDetails } from "../repository/student.repository.js"
import { BadRequestError, NotFoundError } from "../utils/app.error.js"
import { hashPassword, comparePassword } from "../utils/encrypt.js"
import { sendStudentLoginDetails } from "../utils/mailer.js"

export const registerStudentService = async (data) => {
    const studentExists = await findStudentByEmail(data.email);
    if(studentExists) throw new BadRequestError(`Account already exists`);

    const plainPassword = data.password;

    data.password = await hashPassword(data.password);

    const student = await saveStudentDetails(data);

    await sendStudentLoginDetails(student.email, student.firstName, plainPassword);

    return student;
}
export const loginStudentService = async (data) => {
    const student = await findStudentByEmail(data.email);
    if(!student) throw new NotFoundError(`Account not found`);

    const isMatch = await comparePassword(data.password, student.password);
    if(!isMatch) throw new BadRequestError(`Invalid credentials`);

    return student;
}