const auth = require('./auth');
const user = require('./user');
const event = require('./event');
const gfg = require('./gfg');
const codeforces = require('./codeforces');

const authenticate = require('../middlewares/authenticate');

module.exports = app => {
    app.get('/', (req, res) => {
        res.status(200).send({ message: "Api started"});
    });

    app.use('/auth', auth);
    app.use('/user', authenticate, user);
    app.use('/event',  event);
    app.use('/gfg', authenticate ,gfg);
    app.use('/codeforces', codeforces);
};