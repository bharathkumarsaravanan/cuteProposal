// Set up the Express server to host our love letter page
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Route for the main love letter page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Route for the memories page
app.get('/memories', (req, res) => {
  res.sendFile(__dirname + '/public/memories.html');
});

// Route for the new custom page
app.get('/special', (req, res) => {
  res.sendFile(__dirname + '/public/special.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Love letter server running at http://localhost:${port}`);
});
