//Auqi
//Haz una variable donde guarde las funciones
const CryptoJS = require("crypto-js");

var funciones = {
  e: data =>{
    var ciphertext = CryptoJS.AES.encrypt(data, 'secret key 12345');
    return ciphertext.toString();
  },//listo
  d: parametros =>{
    hola = [];
    
    hola.push(parametros.map(metercosas));
    
    function metercosas(parametros) {
      var nom = CryptoJS.AES.decrypt(parametros.nom_usu, 'secret key 12345');
      var ema = CryptoJS.AES.decrypt(parametros.ema_usu, 'secret key 12345');
      var edad = CryptoJS.AES.decrypt(parametros.edad_usu, 'secret key 12345');
      var tel = CryptoJS.AES.decrypt(parametros.tel_usu, 'secret key 12345');           
      nuevo = {"index":parametros.length,"nom":nom.toString(CryptoJS.enc.Utf8) ,"ema":ema.toString(CryptoJS.enc.Utf8),"edad":edad.toString(CryptoJS.enc.Utf8),"tel":tel.toString(CryptoJS.enc.Utf8)}; 
      return nuevo;
    }
    console.log("Estos es hola señores::." + JSON.stringify(hola));
    return hola;
  }
}
module.exports = funciones;
//abre
//haber que llevas de la conexion?sigueme
