// *** This file initialize everything and start listening for requests ***
let express = require('express');
let http = require('http');

let routes = require('./routes/api');

// Initialize express and create http server and listen on port 3000
let app = express();
let server = http.createServer(app);

// Use port passed as argument or 3000 as default
let port = process.argv[2] ? process.argv[2] : 3000;

// Start listening
server.listen(() => console.log("Listening on port " + port));

// Initialize api URL
app.use('/api', routes);