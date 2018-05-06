const express = require('express');

const app = express();
app.set('view engine', 'jade');
app.set('views', process.argv[3]);
app.get('/home', (request, response) => {
  response.render('index', {
    date: new Date().toDateString(),
  });
});
app.listen(Number(process.argv[2]));
