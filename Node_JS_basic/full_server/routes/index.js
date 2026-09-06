const express =  require('express');
const appController = require('../controllers/AppController.js');
const studentsController = require('../controllers/StudentsController.js');
const router = express.Router();

router.get('/', appController.getHomepage);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

module.exports = router;