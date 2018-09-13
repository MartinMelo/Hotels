var express = require('express');
var router = express.Router();

/* GET hotels listing. */
router.get('/all', function(req, res) {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('hotels.json', 'utf8'));
    res.send(json);
});
router.get('/byStars', function(req, res) {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('hotels.json', 'utf8'));
    var starsToFilter = parseInt(req.query.stars);
    console.log(starsToFilter);
    var filteredHotels = getFilterHotelByStars(json, starsToFilter);
    res.send(filteredHotels);
});
router.get('/byName', function(req, res) {
    var fs = require('fs');
    var json = JSON.parse(fs.readFileSync('hotels.json', 'utf8'));
    var nameToFilter = req.query.name.toLowerCase();
    var filteredHotels = getFilterHotelsByName(json, nameToFilter);
    res.send(filteredHotels);
});

function getFilterHotelByStars(hotels,stars) {
    return hotels.filter(function(e) {
        return e.stars === stars;
    });
}
function getFilterHotelsByName(hotels, nameToSearch) {
    return hotels.filter(function(e) {
        return e.name.toLowerCase().indexOf(nameToSearch) > -1;
    });
}


module.exports = router;
