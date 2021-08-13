const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const gfgSchema = new mongoose.Schema({

    title: {
        type: String,
        required: 'title is required',
    },

    link : {
        type: String,
        required: 'link is required',
    },

    topic:{
        type: String,
        reuired: 'topic is required'
    }

}, {timestamps: true});


gfgSchema.plugin(aggregatePaginate);

module.exports = mongoose.model('gfgs', gfgSchema);