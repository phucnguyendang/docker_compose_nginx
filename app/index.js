// app/index.js
const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  // Lấy hostname, cũng chính là container ID trong Docker
  const containerId = os.hostname(); 
  res.send(`Hello from a very happy container! My ID is: ${containerId}`);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});