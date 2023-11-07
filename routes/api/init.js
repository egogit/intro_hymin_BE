const express = require('express');
const setInitDB = require('../../controllers/initController');

const router = express.Router();
router.get('/', setInitDB);

module.exports = router;