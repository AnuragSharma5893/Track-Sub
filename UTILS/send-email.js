import dayjs from "dayjs";
import Subscription from "../Models/subscription.model.js";
import { emailTemplates } from "./email-template.js";
import transporter  from "../config/nodemailer.js";
import { accountEmail } from "../config/nodemailer.js";


export const sendReminderEmail = async ({to, type, Subscription}) => {
    if(!to || !type) throw new Error('Missing required parameters');
    
    const template = emailTemplates.find((t) => t.label === type);

    if(!template) throw new Error('Invalid email typo');

    const mailInfo = {
        userName: Subscription.user.name,
        Subscription: Subscription.name,
        renewalDate: dayjs(Subscription.renewalDate).format('MMM D, YYYY'),
        planName: Subscription.name,
        price: `${Subscription.currency} ${Subscription.price} (${Subscription.frequency})`,
        paymentMethod: Subscription.paymentMethod,
    }

    const message = template.generateBody(mailInfo);
    const subject = template.generateSubject(mailInfo);

    const mailOptions = {
        from: accountEmail,
        to: to,
        subject: subject,
        html: message,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if(error) return console.log(error, 'Error sending email');

        console.log('Email sent: ' + info.response);
    })
}
