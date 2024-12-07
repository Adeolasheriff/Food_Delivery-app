const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/User');
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');

const registerController = async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        console.log(existingUser)
        if (existingUser) {
            return res.status(200).send({
                message: 'User already exists',
                success: false,
            });
        }
        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        req.body.password = hashPassword;

        // const passwordConfirm = req.body.passwordConfirm;
        const hashPasswordConfirm = await bcrypt.hash(req.body.passwordConfirm, salt);

        const otp = otpGenerator.generate(6, {
            // digits: 6,
            digits: true,
            upperCase:false,
            specialChars: false,
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
        });
        req.body.passwordConfirm = hashPasswordConfirm;
        if (req.body.password === req.body.passwordConfirm) {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                otp: otp,
                profileImage: req.body.profileImage,
                passwordConfirm: req.body.passwordConfirm
            });
            await newUser.save();

            const token = jwt.sign({
                id: newUser._id
            }, process.env.JWT_SECRET, {
                expiresIn: '1d',
            });

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            })

            var mailOptions = {
                from: 'From Food delivery shop',
                to: req.body.email,
                subject: 'Sending otp for Email verification ',
                text: `your verification code is ${otp}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error(error);
                    return res.status(500).send({
                        message: 'Failed to send email',
                    });
                } else {
                    res.send({ message: "OTP sent to email" });
                }
            });
            return res.status(201).send({
                message: 'User registered successfully',
                data: {
                    user: newUser,
                    token,
                },
                success: true,
            });
        } else {
            return res.status(400).send({
                message: 'Passwords do not match',
                success: false,
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Registration error',
            success: false,
        });
    }
}

const authController = async (req,res) => {
    try {
        const user = await User.findOne({_id:req.body.userId});
        if (!user) {
            return res.status(404).send({
                message: 'User not found',
                success: false,
            });
        } else {
            console.log(user);
            return res.status(200).send({
                message:"REgister successful",
                data: { user},
                success: true,
            })
        }

        
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            message: 'Authentication error',
            success: false,
        });
     }
}

module.exports = { registerController ,authController};
