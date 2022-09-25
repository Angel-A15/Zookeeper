//adds npm package
const express = require('express');
//will run noraml port, if not, switch to default 3001
const PORT = process.env.PORT || 3001;
//instantiate the server
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
//app.use
// a method executed by our Express.js server that mounts a function to the 
// server that our requests will pass through before getting to the intended endpoint
// parse incoming JSON data
app.use(express.json());
//instructs the server to make certain files readily available 
//and to not gate it behind a server endpoint
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// const fs = require('fs');
// const path = require('path');











