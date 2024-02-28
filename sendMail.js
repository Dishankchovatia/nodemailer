const nodemailer = require('nodemailer');
require("dotenv").config("./env");


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  

  const mailOptions ={
    from:'name "sender@gmail.com"', 
    to: "receiver@gmail.com", 
    subject: "subject", 
    text: "Congratulations.....", 
    html: "<p> hello user..</p>", 

  }

  const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("email sent");
    } catch (error) {
      console.log(error);  
    }
  };

  sendMail(transporter, mailOptions);