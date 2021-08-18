const User = require('../models/user');
const Vedio = require('../models/vedio');
const Playlist = require('../models/playlist');

//addvedio

exports.addVedio = async (req, res)=>{
    try {
        const user = await User.findById(req.body.userId);

        const newVedio = req.body;
        delete newVedio.userId;

        const vedio = new Vedio(newVedio);
        vedio.userId = user;
        vedio.playlistId = null;
        await vedio.save();

        user.vedios.push(vedio);
        const user_ = await user.save();

        res.status(200).json({vedio, user: user_});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}

//get all vedios
exports.getallvedio = async (req, res)=>{
    try {
        const vedios = await Vedio.find({});
        res.status(200).json({vedios});
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


//get user vedios
exports.getuservedio = async(req, res) =>{
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if(!user)
            return res.status(404).json({message: "User not exists"});

        const vedios = await Vedio.find({userId});
        res.status(200).json({vedios});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


//deleteVedio
exports.deletevedio= async(req, res) => {
    try {
        const vedio = await Vedio.findByIdAndRemove(req.params.id);

        if(!vedio) {
            return res.status(404).json({message: "vedio Doesnot exits"});
        }

        const user = await User.findById(vedio.userId);
        user.vedios.pull(vedio);
        await user.save();

        if(vedio.playlistId){
            const playlist = await Playlist.findById(vedio.playlistId);
            playlist.vedios.pull(vedio);
            await playlist.save();
        }

        res.status(200).json({user});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


//update Vedio
exports.updatevedio = async(req, res) => {
    try {
        const vedio = await Vedio.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message: "Vedio is updated", vedio});
        
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}




