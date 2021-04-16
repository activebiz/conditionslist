'use strict';

var express    = require('express');        // call express
var app        = express();                 // define our app using express
const fs = require('fs');
var cors = require('cors');

var port = process.env.PORT || 8080;        // set our port

// use it before all route definitions
app.use(cors());

let rawdata = fs.readFileSync('data/conditions.json');
let conditions = JSON.parse(rawdata);

var router = express.Router();

router.get('/', function(req, res) {
    res.json(conditions);   
});
app.use('/conditions', router);
app.listen(port);
console.log('api server stared on port ' + port);
