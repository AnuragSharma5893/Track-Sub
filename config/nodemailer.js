import nodemailer from 'nodemailer';
import { EMAIL_PASS } from "./env.js";
import express from "express";

export const accountEmail = 'anuragsharma58693@gmail.com';

const transporter = nodemailer.createTransport( {
    services: "gmail",
    auth: {
        user: accountEmail,
        pass : "EMAIL_PASS"
    }
})

export default transporter;