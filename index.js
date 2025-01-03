const express = require('express')
const app = express();

app.get('/', (req, res) => {
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

const PORT = process.env.PORT || 5000

app.listen(PORT)