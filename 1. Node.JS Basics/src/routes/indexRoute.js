/**
 * Created by Sohail Alam on 10/04/2016.
 */
var express = require('express');
var router = express.Router();

// home page
router.get('/', function (req, res, next) {
    res.send('Welcome Sandeep!');
});

module.exports = router;