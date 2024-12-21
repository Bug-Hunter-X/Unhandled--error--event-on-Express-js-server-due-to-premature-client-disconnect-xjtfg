const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello!');
  }, 5000); // Simulate a 5-second delay
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//The bug is that if the client closes the connection before the 5 seconds delay, it will cause a error because the response has not been sent yet.
//This can be fixed using the 'close' event on the request object.