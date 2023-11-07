const express = require('express');
const getAPI = require('./api');

const router = express.Router();

router.use('/api', getAPI);

module.exports = router;