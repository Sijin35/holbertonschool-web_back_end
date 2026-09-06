const fs = require('fs');

const readDatabase = (path) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
            reject(error);
        } else {
            const cleanData = data
              .split('\n').slice(1)
              .map((value) => value.trim())
              .filter((value) => value !== '')
              .map((value) => value.split(','));

            const students = cleanData.reduce((accumulator, student) => {
              if (accumulator[student[3]]) {
                accumulator[student[3]].push(student[0]);
              } else {
                accumulator[student[3]] = [student[0]];
              }
              return accumulator;
            }, {});

            resolve(students);
        }
    });
  });

  return promise;
}

module.exports = { readDatabase };