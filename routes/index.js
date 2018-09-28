var express = require('express');
var router = express.Router();
const path = require('path');
const body_parser = require('body-parser');
const cifrar = require('./cifrar.js');
var db = require('../DB/DBcontroller.js');
//var val = require('./validacion');
/* GET home page. */
router.use(body_parser.json());
router.use(body_parser.urlencoded({extended: true}));

router.get('/cifrar', function(req, res, next) {
	res.sendFile("index.html", {root: path.join(__dirname, "../public/html")});
});

router.post('/registrar', function(req, res, next) {
	console.log(JSON.stringify(req.body));
	var holi = req.body;
	let NomCipher = cifrar.e(holi.nom);
	let CorCipher = cifrar.e(holi.cor);
	let EdaCipher = cifrar.e(holi.eda);
	let TelCipher = cifrar.e(holi.tel);
	var JsonCipher = {"Nom" :NomCipher,"Cor":CorCipher,"Edad":EdaCipher, "Tel":TelCipher};
	//res.send("Holi que tal amigo");
	db.Registrar(NomCipher,CorCipher,EdaCipher,TelCipher).then(succes=>{
		res.send(succes);
	}); 	
});

router.get('/descifrar', function(req, res) {
	res.sendFile("descifrar.html", {root: path.join(__dirname, "../public/html")});
});

router.post('/consultar', function(req, res) {
	console.log("Checando que entre a la funcion");
	db.Consultar().then(succes => {
		console.log("Aqui viendo " +succes);
		res.send(succes);
	}); 
});


module.exports = router;
