var express = require('express');
var router = express.Router();
// var path = require('path');
const fs = require('fs');

router.get('/', function(req, res, next) {
    console.log("routing to inventors.....");
    //use json data from inverstors.json
    const filePath = './data/inventors.json';
    
    var obj = JSON.parse(fs.readFileSync(filePath,'utf8'));
    var inventors = {"inventors" : obj};
    console.log(inventors.inventors[0].first);
    res.render('inventors',{"inventors" : obj});
});

module.exports = router;