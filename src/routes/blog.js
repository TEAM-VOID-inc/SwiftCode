const express = require('express');
const {check} = require('express-validator');

const Blog = require('../controllers/blog');
const validate = require('../middlewares/validator');

const router = express.Router();

router.get('/', Blog.getallblog);

router.post('/',  [
    check('title').not().isEmpty().withMessage('title is required'),
    check('description').not().isEmpty().withMessage('desctiption is required'),
    check('userId').not().isEmpty().withMessage('userId is required')
], validate, Blog.addblog);


router.get('/:id', Blog.getuserblog);

router.put('/:id', Blog.updateblog);

router.delete('/:id', Blog.deleteblog);

module.exports = router;