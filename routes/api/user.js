const express = require('express');
const userController = require('../../controllers/userController');

const router = express.Router();
router.get('/info', userController.getUserInfo);
router.post('/info/update', userController.updateUserInfo);

router.get('/skill', userController.getSkill);
router.post('/skill/update', userController.updateSkill);
// router.post('/skill/insert', userController.insertSkill);
// router.get('/skill/delete', userController.deleteSkill);

router.get('/interests', userController.getInterests);
// router.post('/interests/update', userController.updateInterests);
// router.post('/interests/insert', userController.insertInterests);
// router.get('/interests/delete', userController.deleteInterests);

router.get('/experience', userController.getExperience);
router.post('/experience/update', userController.updateExperience);
// router.post('/experience/insert', userController.insertExperience);
// router.get('/experience/delete', userController.deleteExperience);

router.get('/education', userController.getEducation);
// router.post('/education/update', userController.updateEducation);
// router.post('/education/insert', userController.insertEducation);
// router.get('/education/delete', userController.deleteEducation);

router.get('/certificate', userController.getCertificate);
// router.post('/certificate/update', userController.updateCertificate);
// router.post('/certificate/insert', userController.insertCertificate);
// router.get('/certificate/delete', userController.deleteCertificate);

router.get('/project', userController.getProject);
// router.post('/project/update', userController.updateProject);
// router.post('/project/insert', userController.insertProject);
// router.get('/project/delete', userController.deleteProject);

router.get('/extracurriculum', userController.getExtracurriculum);
// router.post('/extracurriculum/update', userController.updateExtracurriculum);
// router.post('/extracurriculum/insert', userController.insertExtracurriculum);
// router.get('/extracurriculum/delete', userController.deleteExtracurriculum);

module.exports = router;