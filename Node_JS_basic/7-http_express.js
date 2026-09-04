const express = require('express');
const fs = require('fs');
// const {countStudents} = require('./5-http.js');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.set('Content-Type', 'text/plain');
    const countStudents = (req) => {
    const promise = new Promise((resolve, reject) => {
        fs.readFile(req, 'utf-8', (error, data) => {
            if (error) {
                reject(new Error('Cannot load the database'));
            } else {
                data = data
                .split('\n').slice(1)
                .map((value) => value.trim())
                .filter((value) => value !== '')
                .map((value) => value.split(','))
                .reduce((accumulator, student) => {
                    if (accumulator[student[3]]) {
                        accumulator[student[3]].push(student[0]);
                    } else {
                        accumulator[student[3]] = [student[0]];
                    }
                    return accumulator;
                }, {});

                let output = `Number of students: ${data.length}\n`;
                const keys = Object.keys(data);
                keys.forEach((key) => {
                    const studentsCount = students[key].length;
                    output += `Number of students in ${key}: ${studentsCount}. List: ${students[key].join(', ')}\n`;
                });

                resolve(output);
            };
        });
    });
    return promise;
  };
  res.send(countStudents(req));
});

app.listen(port);
module.exports = app;