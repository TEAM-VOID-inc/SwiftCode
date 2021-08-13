const {getContent} = require('../utils/codeforcesextract');


exports.gettopic = async (req, res) => {
    try {
        const content = await getContent();
        console.log(content);

    // console.log(scrapedData);
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
}


