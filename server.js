const express = require('express');
const port = require('./config.js');
const router = require('./router.js');

let app = express();

app.use('/',router);

console.log("server listening through port: "+ port);
app.listen(port);

module.exports = app;
