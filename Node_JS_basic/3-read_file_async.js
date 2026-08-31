const fs = require('fs');

const countStudents = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const cleanData = data.split('\n').slice(1);
        const cleanValidStudents = cleanData.map((value) => value.trim());
        const validStudents = cleanValidStudents.filter((value) => value !== '');
        const studentsArray = validStudents.map((value) => value.split(','));

        const c = studentsArray.length;
        console.log(`Number of students: ${c}`);

        const students = studentsArray.reduce((accumulator, student) => {
          if (accumulator[student[3]]) {
            accumulator[student[3]].push(student[0]);
          } else {
            accumulator[student[3]] = [student[0]];
          }
          return accumulator;
        }, {});

        const keys = Object.keys(students);

        keys.forEach((key) => {
          const studentsCount = students[key].length;
          console.log(`Number of students in ${key}: ${studentsCount}. List: ${students[key].join(', ')}`);
        });

        resolve(data);
      }
    });
  });

  return promise;
};

module.exports = countStudents;
