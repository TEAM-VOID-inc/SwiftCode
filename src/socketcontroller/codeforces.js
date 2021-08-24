const {getquestions} = require('../utils/codeforcesextract');
const axios = require('axios');
const User = require('../models/user');


exports.gettopicbyid = async ({id, pageid}) => {
    try {
        const user = await User.findById(id);

        if(user.Codeforcesid=== undefined || user.Codeforcesid === null)
            return res.status(400).json({message: 'Codeforcesid'});


        const questions = await getquestions({id: parseInt(pageid)})
        
        const codeforcesquestions = await axios.get(`https://codeforces.com/api/user.status?handle=${user.Codeforcesid}&from=1`);
        const codeforcesdata = codeforcesquestions.data.result


        questions?.map((question, i) => {
            codeforcesdata?.map((data) => {
                if(data.verdict === 'OK')
                {
                    if(question.questionTitle === data.problem.name){
                        questions[i].done = true; 
                    }
                }
            })
        })

        return questions;

    } catch (error) {
        console.log("error", error);
    }
}
