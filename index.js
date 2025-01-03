const express = require('express')
const app = express();

app.get('/data', (req, res) => {
  res.send({
    firstName: 'Chinonye',
    lastName: 'Ojukwu',
    age: 19,
    result: {
      Mathematics: 90,
      English: 85,
    },
  });
});

app.listen(5000)