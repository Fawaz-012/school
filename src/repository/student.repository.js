import { Student } from "../db/models/student.js"

export const findStudentByEmail = async (email) => {
    return await Student.findOne({ where: { email } });
}

export const findStudentById = async (id) => {
    return await Student.findOne({ where: { id } });
}

export const saveStudentDetails = async (data) => {
    return await Student.create(data);
}

export const updateStudentDetails = async (data, id) => {
    return await Student.update(data, {
        where: { id }
    });
}