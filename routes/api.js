// *** This file respond to all api call ***
'use strict';

let express = require('express');

let exec = require('child_process').exec;

// Using express.Router() for modularity
let router = express.Router();

// GETs
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Get command from URL and execute. Check for errors and send the output
router.get('/:command', (req, res) => {
    exec(req.params['command'].toString(), (error, stdout, stderr) => {
        if (!error) {
            stderr ? stderr : res.send(stdout);
        }
    });
});

module.exports = router;