const express = require('express');

const app = express();
app.get('/search', (request, response) => {
  response.send(request.query);
  response.end();
});
app.listen(Number(process.argv[2]));
