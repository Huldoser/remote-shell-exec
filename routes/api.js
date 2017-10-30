// *** This file respond to all api call ***
'use strict';

const router = require('express').Router();
const exec = require('child_process').exec;

// Get command from URL and execute. Check for errors and send the output
router.get('/:command', (req, res) => {
    exec(req.params['command'].toString(), (error, stdout, stderr) => {
        if (!error) {
            stderr || res.send(stdout);
        } else {
            console.log(error);
        }
    });
});

module.exports = router;