import joi from "joi";

export const signUpTeacherSchema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.string().required(),
  t_class: joi.string().required(),
  password: joi.string().required(),
});

export const loginTeacherSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export const updateTeacherDetailsSchema = joi.object({
  firstName: joi.string(),
  lastName: joi.string(),
  t_class: joi.string(),
});
