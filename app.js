// *** This file initialize everything and start listening for requests ***
let express = require('express');

let api = require('./routes/api');

// Initialize express and create http server
let app = express();

// Use port passed as argument or 3000 as default
let port = process.argv[2] ? process.argv[2] : 3000;

// Initialize api URL
app.use('/', api);

// Start listening
app.listen(port, () => console.log("Listening on port " + port));