var express = require('express');
var router = express.Router();
const path = require('path');
const body_parser = require('body-parser');
const cifrar = require('./cifrar.js');
//var db = require('../DB/DBcontroller.js');
//var val = require('./validacion');
/* GET home page. */
router.get('/', function(req, res, next) {
	res.sendFile("index.html", {root: path.join(__dirname, "../public/html")});
});//Vamos al Ajax
router.post('registrar',function (argument) {
	//vamos al Ajax.js camara sigueme chavo?
	var getdatos = req.body();
	console.log("Estos son los datos que se envian");
	//deberas tambien tenemos que hacer esa madrola de db dejame hacerla solo a
	/*db.registrar(getdatos).then(succes =>{
		if (succes)
			res.send(true);
		res.send(false);
	});*/
});
module.exports = router;
