//Auqi
//Haz una variable donde guarde las funciones
const CryptoJS = require("crypto-js");

var funciones = {
  e: data =>{
    var ciphertext = CryptoJS.AES.encrypt(data, 'secret key 12345');
    return ciphertext.toString();
  },//listo
  d: parametros =>{
    // ciphertext ex el texto ya cifrado cierto?//Sigueme al servidor
    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 12345');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }
}
module.exports = funciones;
//abre
//haber que llevas de la conexion?sigueme
