const User = require('../models/user');
const {sendEmail} = require('../utils/mail');



//send Email to reset password

exports.recover = async(req,res,next) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});

        if(!user)
            return res.status(404).json({success: false,message: 'Email address not Registerd'});
        
        user.generatePasswordReset();

        await user.save();

        let subject =  "Password change request";
        let to = user.email;
        let from = process.env.FROM_EMAIL;
        let text = "Password change request"
        let link = "http://" + req.headers.host + "/auth/reset/" + user.resetPasswordToken;
        let html = `<p>Please click on the following <a href="${link}">link</a> to reset your password.</p> 
                    <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>`;

        await sendEmail({ subject, text, html, to , from});

        res.status(200).json({success: true,message: "An email has been sent to reset your password"})

    } catch (error) {
        res.json(500).json({success: false,message : error});
    }
}


//Validate password reset token and shows the password reset view

exports.reset = async (req, res) => {
    try {
        const { token } = req.params;

        const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}});

        if (!user) 
            return res.status(401).json({success: false,message: 'Password reset token is invalid or has expired.'});

            res.render('reset', {user});
            res.status(200).json({success: true,message: 'A link is created to reset Password. Check Your Email'})
    } catch (error) {
        res.status(500).json({success: false,message: error.message})
    }
}


//Reset Passsword

exports.resetPassword = async (req, res) => {
    try {
        const { token } = req.params;

        const user = await User.findOne({resetPasswordToken: token, resetPasswordExpires: {$gt: Date.now()}});

        if (!user) return res.status(401).json({success: false,message: 'Password reset token is invalid or has expired.'});

        user.password = req.body.password;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        user.isVerified = true;

        await user.save();

        let subject =  "our password has been changed";
        let to = user.email;
        let from = process.env.FROM_EMAIL;
        let text = "our password has been changed"
        let html = `<p>This is a confirmation that the password for your account ${user.email} has just been changed.</p>`

        await sendEmail({ subject, text, html, to , from});

        res.status(200).json({success: true,message: 'Your password has been updated.'});

    } catch (error) {
        res.status(500).json({success: false,message: error.message})
    }
};