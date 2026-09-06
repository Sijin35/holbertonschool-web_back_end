const express = require('express');
const router = require('./routes/index.js');

const app = express();
app.use(router);
const port = 1245;

app.listen(port);
module.exports = app;