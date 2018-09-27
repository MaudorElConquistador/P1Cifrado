function limpiardiv() {
        document.getElementById('error').innerHTML = "";
        document.getElementById('exito').innerHTML="";
}
//Para limpiar los divs y poner mensajes si han sido regitrados con exito o si no esta metiendobien los datos abre otra para lo del cifrado
function registrar() {
        alert("Entra a la funcion cajagsoasd");
        //Obtenemos los datos del formulario
        var nombre = document.getElementById("nombre");
        var correo = document.getElementById("correo");
        var password = document.getElementById("password");
        var telefono = document.getElementById("telefono");
        //abre una nueva hoja para poner lo de la base
        var request = new XMLHttpRequest();
        request.open("POST", "Registrar", true);breme 
        request.setRequestHeader("Content-type", "application/json");
        xhr.send(Json.stringify({nom:nombre,cor:correo,pas:password,tel:telefono}));
        request.onreadystatechange = function() {
                // si la respuesta fue exitosa
                if(request.readyState == 4 && request.status == 200) {
                        limpiardiv();
                        var resultado = request.responseText;
                        if (resultado == true) {
                          
                          document.getElementById('exito').innerHTML="Se ha registrado exitosamente";
                        }
                        else{
                          document.getElementById('exito').innerHTML="";
                        }
                }
                // si la respuesta trajo error
                else if(request.readyState == 4 && request.status != 200){
                        var message = request.responseText;
                        message = request.responseText;
                        alert(message);
                }
        }
}