/**
 * Created by Sohail Alam on 10/04/2016.
 */
var express = require('express');
var router = express.Router();

// users
router.get('/', function (req, res, next) {
    throw new Error('Opps!!');
});

module.exports = router;