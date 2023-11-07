const express = require('express');
const getInit = require('./init');
const getUser = require('./user');

const router = express.Router();

router.use('/init', getInit);
router.use('/user', getUser);

module.exports = router;