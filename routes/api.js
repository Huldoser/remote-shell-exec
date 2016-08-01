// *** This file respond to any call listed here ***
let express = require('express');

// Using express.Router() for modularity
let router = express.Router();

// GETs
router.get('/', (req, res) => {
    res.send('Hello World');
});

router.get('/:command', (req, res) => {
    res.send('You entered ' + req.params);
});

module.exports = router;