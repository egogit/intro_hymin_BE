const express = require('express');
const getInit = require('./init');
const getUser = require('./user');
const getAuth = require('./auth');

const router = express.Router();

router.use('/init', getInit);
router.use('/user', getUser);
router.use('/auth', getAuth);

module.exports = router;