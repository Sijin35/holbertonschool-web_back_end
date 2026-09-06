const express = require('express');
const router = require('./routes/index');

const app = express();
app.use(router);
const port = 1245;

app.listen(port);
module.exports = app;
