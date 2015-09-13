var express = require('express');
var api = express();
var logger = require('morgan');

var request = require('request');

var fs = require('fs');
var bodyParser = require('body-parser');

var uuid = require('node-uuid');

api.use(logger('dev'));
api.use(bodyParser.json());

api.all('*', function(req, res, next){
    if (!req.get('Origin')) return next();
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.sendStatus(200);
    next();
});

//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
api.get("/", function(req,res,next) {	
    fs.readFile('README.md', function(err,data) {
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end(data);
    });
});

api.get("/yo", function(req,res,next) {
    res.json( { 'val':'kai' } );
});



//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
api.listen( process.env.PORT || 3001 );
console.log( 'Services started on port 3001' );

