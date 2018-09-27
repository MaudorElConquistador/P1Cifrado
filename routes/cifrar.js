//Auqi
//Haz una variable donde guarde las funciones
const CryptoJS = require("crypto-js");
//Cuando hagas funciones asi separalas por una coma
//asi
var funciones = {
  e: parametros =>{
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');

  },//listo
  d: parametros =>{
    // ciphertext ex el texto ya cifrado cierto?//Sigueme al servidor
    var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    console.log(decryptedData);
  }
}
module.exports = funciones;
//abre
//haber que llevas de la conexion?sigueme
