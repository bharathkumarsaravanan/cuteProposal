// Set up the Express server to host our love letter page
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Love letter server running at http://localhost:${port}`);
});
