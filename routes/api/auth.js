const express = require('express');
const authController = require('../../controllers/authController');

const router = express.Router();
router.post('/login', authController.login);
router.get('/checkSession', authController.checkSession);
router.get('/logout', authController.logout);
module.exports = router;