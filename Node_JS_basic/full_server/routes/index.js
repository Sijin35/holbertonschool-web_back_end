const express = require('express');
const appController = require('../controllers/AppController');
const studentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', appController.getHomepage);
router.get('/students', studentsController.getAllStudents);
router.get('/students/:major', studentsController.getAllStudentsByMajor);

module.exports = router;
