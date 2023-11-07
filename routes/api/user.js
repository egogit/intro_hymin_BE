const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();
router.get('/info', userController.getUserInfo);
router.get('/skill', userController.getSkill);
router.get('/interests', userController.getInterests);
router.get('/experience', userController.getExperience);
router.get('/education', userController.getEducation);
router.get('/certificate', userController.getCertificate);
router.get('/project', userController.getProject);

module.exports = router;