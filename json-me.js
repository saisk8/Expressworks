const express = require('express');
const fs = require('fs');

const app = express();

app.get('/books', (req, res) => {
  res.send(JSON.parse(fs.readFileSync(process.argv[3])));
});
app.listen(Number(process.argv[2]));
