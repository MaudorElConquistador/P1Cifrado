function limpiardiv() {
        document.getElementById('error').innerHTML = "";
        document.getElementById('exito').innerHTML="";
}
//Para limpiar los divs y poner mensajes si han sido regitrados con exito o si no esta metiendobien los datos abre otra para lo del cifrado
function registrar() {
        //Obtenemos los datos del formulario
        var nombre = document.getElementById("nombre").value;
        var correo = document.getElementById("correo").value;
        var edad = document.getElementById("edada").value;
        var telefono = document.getElementById("telefono").value;
        //abre una nueva hoja para poner lo de la base
        console.log(nombre," ",correo," ",edad," ",telefono);
        var xhr = new XMLHttpRequest();
        xhr.open("post", "./registrar", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({nom:nombre,cor:correo,eda:edad,tel:telefono}));
        xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                        document.getElementById("exito").innerHTML=xhr.responseText;              
                }
                else if(xhr.readyState == 4 && xhr.status != 200){
                    document.getElementById("error").innerHTML= "Upps algo ha sucedido asegurese que su navegador soporte javascript";           
                }
    }
}

function Consulta1() {
        var xhr = new XMLHttpRequest();
        xhr.open("post", "./consultar", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(null);
        xhr.onreadystatechange = function() {
                // si la respuesta fue exitosa
                if(xhr.readyState == 4 && xhr.status == 200) {
                        console.log(JSON.parse(xhr.responseText));
                        //document.getElementById("Consulta1").innerHTML = xhr.responseText;
                }
                // si la respuesta trajo error
                else if(xhr.readyState == 4 && xhr.status != 200){
                        var message = xhr.responseText;
                        message = xhr.responseText;
                }
        }
}