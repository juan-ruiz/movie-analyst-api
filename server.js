const express = require('express');
const {port} = require('./config.js');
const router = require('./router.js');

let app = express();
app.use('/',router);
app.listen(port);

console.log("server listening through port: "+ port);

module.exports = app;
