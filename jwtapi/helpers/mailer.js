const nodemailer = require('nodemailer');

// Configure Nodemailer to use SMTP server without environment variables
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', // Example: 'smtp.gmail.com'
    port: 587, // Example: 587 (for STARTTLS) or 465 (for SMTPS)
    secure: false, // true for port 465, false for other ports
    auth: {
        user: 'gopalchaudhary134@gmail.com', // Your email address
        pass: 'gowcsyllbncgyfdc' // Your app password or email account password
    }
});

// Function to send an email
const sendMail = async (email, subject, content) => {
    try {
        const mailOptions = {
            from: 'gopalchaudhary134@gmail.com', // Your email address
            to: email,
            subject: subject,
            html: content
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Mail Sent", info);

        return info;
    } catch (error) {
        console.error("Error sending mail:", error);
        throw error;
    }
};

module.exports = {
    sendMail
};








/*const nodemailer = require('nodemailer');
const transporter =  nodemailer.createTransport({

    host:process.env.SMTP_HOST,
    port:process.env.SMTP_PORT,
    secure:false,
    requireTLS:true,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD
    }
});

const sendMail = async(email,subject,content)=>{
    try{
        var mailOptions = {
            from:process.env.SMTP_MAIL,
            to:email,
            subject:subject,
            html:content
        }

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log("error",error);

            }
            console.log("Mail Sent",info);
            // console.log("Mail Sent",info.messageId);

        });


    }catch(error){
        console.log("error",error);

    }

}

module.exports = {
    sendMail
} 
*/

