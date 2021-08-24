const {getquestions} = require('../utils/codechefextract');
const axios = require('axios');
const User = require('../models/user');


exports.gettopicbyid = async ({id, pageid}) => {
    try {
        const user = await User.findById(id);

        if(!user) return res.status(400).json({success: false,message: 'user not found'});

        if(user.codechefid=== undefined || user.codechefid === null)
            return res.status(400).json({success: false,message: 'Codeforcesid is null'});


        const questions = await getquestions({id: pageid})
        
        const codechefdata = await axios.get(`https://competitive-coding-api.herokuapp.com/api/codechef/${user.codechefid}`);

        const objects = codechefdata?.data?.fully_solved;

        let codechefdone = [];

        for(var key in objects) {
            if(key!=="count"){
                var value = objects[key];
                codechefdone = codechefdone.concat(value);
            }
        }

        questions?.map((question, i) => {
            codechefdone?.map((data) => {
                    if(question.questionCode === data.name){
                        questions[i].done = true; 
                    }
            })
        })

        return questions;

    } catch (error) {
        console.log("error", error);
    }
}
