const { check } = require('express-validator');

exports.registerValidators = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please Includea a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    check('mobile', 'Mobile Number Should be contains 10 digit').isLength({ min: 10, max: 10 }),
    check('password', 'Password must be greater than 6 characters,and conatins atleast one uppercase letter,one lowercase letter,and one number,and one special characters')
    .isStrongPassword({minLength:6,minLowercase:1,minUppercase:1,minNumbers:1}),

    check('image').custom((value,{req})=>{
        if(req.file.mimetype==='image/jpeg'||req.file.mimetype==='image/png'){
            return true;
        }else{
            return false;
        }

    }).withMessage("Please an upload an image jpeg or png"),
];

