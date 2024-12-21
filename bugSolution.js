const express = require('express');
const app = express();
app.get('/', (req, res) => {
  req.on('close', () => {
    console.log('Client closed connection');
  });
  setTimeout(() => {
    if (!req.destroyed) {
      res.send('Hello!');
    }
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});