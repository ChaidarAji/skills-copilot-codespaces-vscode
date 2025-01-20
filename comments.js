// create web server
const express = require('express');
const app = express();
const port = 3000;

// create a list of comments
const comments = [
  { name: 'John', comment: 'Hello World!' },
  { name: 'Mary', comment: 'Nice to meet you!' }
];

// create a route for comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});