// main.js

const express = require('express');
const publicRoutes = require('./publicApi');
const privateRoutes = require('./privateApi');

const app = express();
const port = process.env.NODE_LOCAL_PORT;

// Use public and private API routes
app.use('/public', publicRoutes);
app.use('/private', privateRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

