const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.post('/form', (request, response) => {
  response.end(request.body.str.split('').reverse().join(''));
});
app.listen(Number(process.argv[2]));
