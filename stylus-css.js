const express = require('express');
const stylus = require('stylus');

const app = express();
app.use(express.static(process.argv[3]));
app.use(stylus.middleware(process.argv[3]));
app.listen(Number(process.argv[2]));
