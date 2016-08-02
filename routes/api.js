// *** This file respond to all api call ***
let express = require('express');

let spawn = require('child_process').spawn;

// Using express.Router() for modularity
let router = express.Router();

// GETs
router.get('/', (req, res) => {
    res.send('Hello World');
});

// Get command from URL and execute. Respond with output as string.
router.get('/:command', (req, res) => {
    let command = spawn(req.params.command.toString());
    command.stdout.on('data', (data) => {
        res.send(data.toString());
    })
});

module.exports = router;