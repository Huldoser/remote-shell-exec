// *** This file initialize everything and start listening for requests ***
'use strict';

let express = require('express');
let exec = require('child_process').exec;

let api = require('./routes/api');

// Initialize express and create http server
let app = express();

// Use port passed as argument or 3000 as default
let port = process.argv[2] ? process.argv[2] : 3000;

// Initialize api URL
app.use('/api', api);

// Default GET - Prints the README.md file
app.use('/', express.Router().get('/', (req, res) => {
    exec('cat README.md', (error, stdout, stderr) => {
        if (!error) {
            stderr ? stderr : res.send(stdout);
        } else {
            console.log(error);
        }
    });
}));

// Start listening
app.listen(port, () => console.log("Listening on port " + port));