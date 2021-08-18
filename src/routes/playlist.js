const express = require('express');
const {check} = require('express-validator');

const playlist = require('../controllers/playlist');
const validate = require('../middlewares/validator');

const router = express.Router();

router.get('/', playlist.getallPlaylist);

router.post('/',  [
    check('title').not().isEmpty().withMessage('title is required'),
    check('vedios').not().isEmpty().withMessage('vedios is required'),
    check('userId').not().isEmpty().withMessage('userId is required')
], validate, playlist.addPlaylist);


router.get('/:id', playlist.getuserPlaylist);

router.put('/:id', playlist.updatePlaylist);

router.delete('/:id', playlist.deletePlaylist);

router.get('/vedios/:id', playlist.getplaylistvedios)



module.exports = router;