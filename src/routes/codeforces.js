const express = require('express');
const router = express.Router();
const validate = require('../middlewares/validator');
const {check} = require('express-validator');

const codeforces = require('../controllers/codeforces');

router.get('/', codeforces.gettopic);




module.exports = router;