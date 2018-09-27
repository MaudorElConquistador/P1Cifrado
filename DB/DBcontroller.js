var mysql = require('mysql');
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: '',
   database: 'node_mysql',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});
var funciones = {
   Registrar: datos =>{
   return new Promise ((resolve, reject)=>{//datos.nom donde esta?
     var query = connection.query('INSERT INTO usuario(nom_usu,ema_usu,pass_usu,tel_usu) VALUES(?, ?, ?,?)', [datos.nom, datos.cor, datos.pas, datos.tel], function(error, result){
        if(error){
           return error;
        return true;
      }else{
           console.log(result);
        }
      });
    });
  },
  Consultar: e =>{
  return new Promise ((resolve, reject)=>{// si haremos un select aqui?si
    var query = connection.query('SELECT * FROM usuario usuario',  function(error, result){
       if(error){
          return error;
//LLAMADA EN DISCORD SOLO PARA VER TU PANTALLA
          //camara deja lo pruebo a ver cuantos errores tenemos
       return result;
     }else{
          console.log(result);
       }
     });
   });
 }
}
