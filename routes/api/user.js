const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();
router.get('/info', userController.getUserInfo);
router.post('/info', userController.updateUserInfo);

router.get('/skill', userController.getSkill);
router.post('/skill', userController.updateSkill);
router.delete('/skill', userController.deleteSkill);

router.get('/interests', userController.getInterests);
router.post('/interests', userController.updateInterests);
router.delete('/interests', userController.deleteInterests);

router.get('/experience', userController.getExperience);
router.post('/experience', userController.updateExperience);
router.delete('/experience', userController.deleteExperience);

router.get('/education', userController.getEducation);
router.post('/education', userController.updateEducation);
router.delete('/education', userController.deleteEducation);

router.get('/certificate', userController.getCertificate);
router.post('/certificate', userController.updateCertificate);
router.delete('/certificate', userController.deleteCertificate);

router.get('/project', userController.getProject);
router.post('/project', userController.updateProject);
router.delete('/project', userController.deleteProject);

router.get('/extracurriculum', userController.getExtracurriculum);
router.post('/extracurriculum', userController.updateExtracurriculum);
router.delete('/extracurriculum', userController.deleteExtracurriculum);

module.exports = router;