const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const {check} = require('express-validator');

const gfg = require('../controllers/gfg');

router.post('/addTopic', [
    check('topic').not().isEmpty().withMessage('Topic is required'),
], validate, gfg.gfgTopicAdd);

router.get('/:id', gfg.getGFG);

router.post('/', 
[
    check('title').not().isEmpty().withMessage('Title is required'),
    check('maintitle').not().isEmpty().withMessage('Main Title is required'),
    check('link').not().isEmpty().withMessage('Link is required'),
    check('topic').not().isEmpty().withMessage('Topic is required'),
    check('type').not().isEmpty().withMessage('Type is required'),
],
validate, gfg.addGFG);


module.exports = router;