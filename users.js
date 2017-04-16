var express = require('express');
var router = express.Router();
var db = require('./quries');
var statics = require('./statics');
router.post('/signup', db.users.set);
router.post('/authenticate', db.users.get);
router.post('/update', statics.authenticateMiddleWare, db.users.update);
router.post('/stats', statics.authenticateMiddleWare, db.users.stats);
module.exports = router;