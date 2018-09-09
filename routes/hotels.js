var express = require('express');
var router = express.Router();

/* GET hotels listing. */
router.get('/all', function(req, res) {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('hotels.json', 'utf8'));
    res.send(json);
});

module.exports = router;
