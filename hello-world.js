const express = require('express');

const app = express();
app.get('/home', (request, response) => {
  response.end('Hello World!');
});
app.listen(Number(process.argv[2]));
