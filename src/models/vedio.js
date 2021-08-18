const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vedioSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    description :{
        type: String,
        required: true,
    },
    link:{
        type: String,
        required: true,
    },
    playlistId:{
        type: Schema.Types.ObjectId,
        ref: 'playlist'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
}, {timestamps: true})


const blog = mongoose.model('vedio', vedioSchema)

module.exports = blog;