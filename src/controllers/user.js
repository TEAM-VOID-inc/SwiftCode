const User = require('../models/user');
const {sendEmail} = require('../utils/mail');
const {uploader} = require('../utils/uploader');

//Return all users 
exports.index = async function (req, res) {
    const users = await User.find({});
    res.status(200).json({users});
};

//Add a new user

exports.store = async(req, res) => {
    try {
        const {email} = req.body;

        const user = await User.findOne({email});

        if(user)
            return res.status(401).json({message: 'Email already Exists'});

        const password = '_' + Math.random().toString(36).substr(2, 9);
        const newUser = new User({...req.body, password, type: "basic"});

        const user_ = await newUser.save();

        user_.generatePasswordReset();

        await user_.save();

        let domain = "http://" + req.headers.host;
        let subject =  "New Account Created";
        let to = user.email;
        let from = process.env.FROM_EMAIL;
        let text = "New Account Created";
        let link = process.env.AUTH_RESET_PASSWORD  + user.resetPasswordToken;
        let html = `<p>Hi user<p><br><p>A new account has been created for you on ${domain}. Please click on the following <a href="${link}">link</a> to set your password and login.</p><br><p>If you did not request this, please ignore this email.</p>`

        await sendEmail({ subject, text, html, to , from});

        res.status(200).json({success: true,message: 'An email has been sent to ' + user.email + '.'})

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


//Return a specific user
exports.show = async function (req, res) {
    try {
        const id = req.params.id;

        const user = await User.findById(id);

        if (!user) return res.status(401).json({success: false,message: 'User does not exist'});

        res.status(200).json({success: true,user});
    } catch (error) {
        res.status(500).json({success: false,message: error.message})
    }
};


// Update user details
exports.update = async function (req, res) {
    try {
        const id = req.params.id; 

        await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })

        // const user = await User.findById(id);
        const user_ = await User.findById(id);
        
        return res.status(200).json({success: true,user: user_, message: 'User has been updated'});

    } catch (error) {
        res.status(500).json({success: false,message: error.message});
    }
};

//Delete User

exports.destroy = async function (req, res) {
    try {
        const id = req.params.id;
        const user_id = req.user._id;

        if (user_id.toString() !== id.toString()) 
                return res.status(401).json({success: false,message: "Sorry, you don't have the permission to delete this data."});

        await User.findByIdAndDelete(id);

        res.status(200).json({success: true,message: 'User has been deleted'});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
