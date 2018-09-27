var express = require('express');
var router = express.Router();
const path = require('path');
const body_parser = require('body-parser');
//var db = require('../DB/DBcontroller.js');
//var val = require('./validacion');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile("index.html", {root: path.join(__dirname, "../public/html")});
});
router.post('registrar',function (argument) {
	var holi = req.body();
	db.registrar(holi).then(succes =>{
		if (succes)
			res.send(true);  
		res.send(false);
	});
});
module.exports = router;
