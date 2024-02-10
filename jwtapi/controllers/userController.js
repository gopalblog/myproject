const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const mailer = require('../helpers/mailer');

const { validationResult } = require('express-validator');


const userRegister = async (req, res) => {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                msg: "Errors",
                errors: errors.array()

            })

        }

        const { name, email, mobile, password } = req.body;
        const isExist = await User.findOne({ email: email });
        if (isExist) {
            return res.status(400).json({
                success: false,
                msg: "Email Already Exist!"

            })

        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name: name,
            email: email,
            mobile: mobile,
            password: hashPassword,
            image: 'images/' + req.file.filename

        });

        const userData = await user.save();
        console.log("userData", userData);

        const msg = `<p>Hi ${name},</p>
                    <p>Please <a href="http://127.0.0.1:3000/mail-verification?id=${userData._id}">verify your email</a>.</p>`;

                mailer.sendMail(email,'Mail Verification',msg);

        return res.status(200).json({
            success: true,
            user: userData,
            msg: "Registered Successfully!"


        })

    } catch (error) {
        return res.status(400).json({
            success: false,
            msg: error.message

        })

    }

}

module.exports = {
    userRegister
}

