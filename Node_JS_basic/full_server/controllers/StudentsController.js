const { readDatabase } = require('../utils.js');

class StudentsController {
  static getAllStudents(request, response) {
    const database = process.argv[2];
    readDatabase(database)
      .then((students) => {
        response.statusCode = 200;
        let output = 'This is the list of our students\n';
        const keys = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );
        keys.forEach((key) => {
          const studentsCount = students[key].length;
          output += `Number of students in ${key}: ${studentsCount}. List: ${students[key].join(', ')}\n`;
        });
        response.end(output);
      })
      .catch(() => {
        response.statusCode = 500;
        response.end('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const database = process.argv[2];
    const { major } = request.params;
    if (major === 'CS' || major === 'SWE') {
      readDatabase(database)
        .then((students) => {
          response.statusCode = 200;
          response.end(`List: ${students[major].join(', ')}`);
        })
        .catch(() => {
          response.statusCode = 500;
          response.end('Cannot load the database');
        });
    } else {
      response.statusCode = 500;
      response.end('Major parameter must be CS or SWE');
    }
  }
}

module.exports = StudentsController;
