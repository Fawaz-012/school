import nodemailer from "nodemailer";
import { config } from "../lib/env.js";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: config.gmail.user,
        pass: config.gmail.pass
    }
});

export const sendStudentLoginDetails = async (email, firstName, password) => {
    await transporter.sendMail({
        from: config.gmail.user,
        to: email,
        subject: "Welcome to SCHOOL — Your Login Details",
        html: `
            <h2>Welcome ${firstName}!</h2>
            <p>Your account has been created. Here are your login details:</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Password:</b> ${password}</p>
            <p>Please login and reset your password.</p>
        `
    });
};