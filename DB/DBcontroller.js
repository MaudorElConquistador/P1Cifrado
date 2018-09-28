var mysql = require('mysql');
const escape = require("mysql").escape;
var con = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'holamundo',
   database: 'USUARIOAES',
   port: 3306
});
con.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var funciones = {
  Registrar: (nom,cor,pas,tel) =>{
    return new Promise((resolve, reject) => {
        con.query('INSERT INTO USUARIO(nom_usu,ema_usu ,edad_usu,tel_usu) VALUES(?, ?, ?,?)', [nom, cor, pas, tel], (err, result) => {
        if (err)
          throw err
        return resolve("Se ha registrado la persona con exito");
        });
    });
  },
  Consultar: e =>{
  return new Promise ((resolve, reject)=>{// si haremos un select aqui?si
    con.query('SELECT * FROM usuario usuario',  function(error, result){
      if (error)
        throw error;
      return resolve(result);
     });
   });
 }
}
module.exports = funciones;

