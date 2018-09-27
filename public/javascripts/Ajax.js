function limpiardiv(argument) {
        document.getElementById('error').innerHTML = "";
        document.getElementById('exito').innerHTML="";
}
function loginByAjax(data) {
        var request = new XMLHttpRequest();
        request.open("POST", "Registrar", true);
        request.setRequestHeader("Content-type", "application/json");
        xhr.send(Json.stringify({nom:nombre,correo:correo}));
        request.onreadystatechange = function() {
                // si la respuesta fue exitosa
                if(request.readyState == 4 && request.status == 200) {
                        var message = request.responseText;
                        alert(message);
                } 
                // si la respuesta trajo error
                else if(request.readyState == 4 && request.status != 200){
                        var message = request.responseText;
                        message = request.responseText;
                        alert(message);
                }
        };
