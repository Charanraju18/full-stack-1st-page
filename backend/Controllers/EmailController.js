const express = require('express')
const nodemailer = require('nodemailer')
const Mail = require('nodemailer/lib/mailer')

const mailSender = (req,res) => {
    const Transporter = nodemailer.createTransport({
        service : 'gmail',
        auth : {
            user : "charanraju925@gmail.com",
            pass : "xssq aczk aygd aukt"
        }
    })
    const mailOptions = {
        from : "charanraju925@gmail.com",
        to : req.body.email,
        subject : "Testing NodeMailer",
        text : "Have a nice day Mr. Jitendra. Its great you have joined our community"
    }

    Transporter.sendMail(mailOptions,(err,info) =>{
        if(err){
            return res.status(500).json(err);
        }
        else{
            console.log("Mail Sent")
            return res.status(200).json("Sent Succesfully");
        }

    })
}

exports.mailSender = mailSender;