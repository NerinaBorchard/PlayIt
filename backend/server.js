const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the frontend/public directory
app.use(express.static(path.join(__dirname, '../../frontend/public')));

// Serve index.html for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public', 'index.html'));
});

// Start the server
app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
