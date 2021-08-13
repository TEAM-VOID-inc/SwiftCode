const {gfg} = require('../utils/gfgextract');
const GFGmodel = require('../models/gfg');
const User = require('../models/user');
const GFGTopic = require('../models/gfgTopic');


exports.getGFG = async (req, res) => {
    try {
        const id= req.params.id;
        const user = await User.findById(id);
        const topic = req.query.topic;
        
        console.log(topic);

        if(user.GFGid === undefined || user.GFGid === null)
            return res.json({message: 'Enter Gfg id'});

        const articles = await gfg({GFGid : user.GFGid});

        if(topic === undefined)
        {
            
        const questions = await GFGmodel.find({}).sort('topic');

        const questionsdone = await GFGTopic.find({});

        questionsdone?.map((que, i)=>{
            questionsdone[i] = {topic : que._doc.topic , count : 0, questionsets : [], position: i}
        })

        questions?.map((question, j)=>{
            questions[j] = {...question._doc, done: false}
        });

        questionsdone.sort(function(a, b) {
            var StringA = a.topic.toUpperCase();
            var StringB = b.topic.toUpperCase();
            if (StringA  < StringB) {
                return -1;
            }
            if (StringA  > StringB) {
                return 1;
            }
            return 0;
        });


        let i=0, j=0; 

        while(i<questionsdone.length && j<questions.length)
        {
            if(questionsdone[i].topic.toUpperCase().trim() === questions[j].topic.toUpperCase().trim())
            {   let count = questionsdone[i].count;

                for(var k=0;k<articles.length;k++) 
                {   
                    if(questions[j].title.toUpperCase().trim() == articles[k].title.toUpperCase().trim()){
                        count = count+1;
                        questions[j].done = true;
                    }
                }

                if(questionsdone[i].questionsets.length > 0)
                    {
                        questionsdone[i].count = count;
                        questionsdone[i].questionsets = [...questionsdone[i].questionsets, questions[j]];
                    }else{
                        questionsdone[i].count = count;
                        questionsdone[i].questionsets = [questions[j]];
                    }
                j++;
            }
            else{
                i++;
            }
        }

        questionsdone.sort(function (a, b) {
            return a.position - b.position;
        });

        res.status(201).json(questionsdone);

        } else{
            
            const questions = await GFGmodel.find({topic});

            const questionsdone = {topic: topic, count : 0, questionsets : []};
    
            questions?.map((question, i)=>{
                questions[i] = {...question._doc, done: false}
            });


            for(var i=0;i<questions.length;i++)
            {
                for(var j=0;j<articles.length;j++) 
                {
                    if(questions[i].title == articles[j].title){
                        questionsdone.count = questionsdone.count+1;
                        questions[i].done = true;
                    }
                }

                if(questionsdone.questionsets.length > 0)
                    {
                        questionsdone.questionsets = [...questionsdone.questionsets, questions[i]];
                    }else{
                        questionsdone.questionsets = [questions[i]];
                    }
            }

            res.status(201).json(questionsdone);
        }
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


exports.addGFG= async (req, res) => {
    try {
        const {title, link, topic} = req.body;

        const linkcheck = await GFGmodel.findOne({link});

        if(linkcheck)
            return res.status(401).json({message: "Question already Exits"});
        
        const newQuestion = new GFGmodel({title, link, topic});

        await newQuestion.save();

        res.status(201).json({message: "Question Sucessfully Added"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


exports.gfgTopicAdd = async (req, res) => {
    try {
        const {topic} =  req.body;

        const topiccheck = await GFGTopic.findOne({topic});

        if(topiccheck)
            return res.status(401).json({message: "Topic Already Exists"});

        const newTopic = new GFGTopic({topic});

        await newTopic.save();

        res.status(201).json({message: "Topic Sucessfully Added"});

    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}