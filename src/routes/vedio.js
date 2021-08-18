const express = require('express');
const {check} = require('express-validator');

const vedio = require('../controllers/vedio');
const validate = require('../middlewares/validator');

const router = express.Router();

router.get('/', vedio.getallvedio);

router.post('/',  [
    check('title').not().isEmpty().withMessage('title is required'),
    check('description').not().isEmpty().withMessage('desctiption is required'),
    check('link').not().isEmpty().withMessage('link is required'),
    check('userId').not().isEmpty().withMessage('userId is required')
], validate, vedio.addVedio);


router.get('/:id', vedio.getuservedio);

router.put('/:id', vedio.updatevedio);

router.delete('/:id', vedio.deletevedio);



module.exports = router;