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
                    limpiardivCon();
                    limpiardivCon2();
                    var longitud = JSON.parse(xhr.responseText).length;   
                    var json = JSON.parse(xhr.responseText);
                    Tabla(json, longitud);
                }
                // si la respuesta trajo error
                else if(xhr.readyState == 4 && xhr.status != 200){
                       
                }
        }
}
function limpiardivCon(e) {
    document.getElementById("Consultas").innerHTML="";
}

function limpiardivCon2(e) {
    document.getElementById("Consultas2").innerHTML="";
}
function Tabla(json, longitud) {
    var Tabl = document.createElement("table");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var tr = document.createElement("tr");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    th1.innerHTML="Nombre";
    th2.innerHTML="Email";
    th3.innerHTML="Edad";
    th4.innerHTML="Telefono";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);
    Tabl.appendChild(thead);
    Tabl.setAttribute("class","responsive-table"); 
    thead.setAttribute("id","col s5");
    for (var i = 0; i <= longitud -1 ; i++) {
        var th1a = document.createElement("th");
        var th2a = document.createElement("th");
        var th3a = document.createElement("th");
        var th4a = document.createElement("th");
        var tra = document.createElement("tr"); 
        console.log("Esto es el json " + JSON.stringify(json[i])+" mas la longitud"+ longitud);
        var nombre = document.createTextNode(JSON.stringify(json[i].nom_usu));
        var ema = document.createTextNode(JSON.stringify(json[i].ema_usu));
        var edad = document.createTextNode(JSON.stringify(json[i].edad_usu));
        var tel = document.createTextNode(JSON.stringify(json[i].tel_usu));
        th1a.appendChild(nombre);
        th2a.appendChild(ema);
        th3a.appendChild(edad);
        th4a.appendChild(tel);
        tra.appendChild(th1a);
        tra.appendChild(th2a);
        tra.appendChild(th3a);
        tra.appendChild(th4a);
        tbody.appendChild(tra);
        Tabl.appendChild(tbody);
    }
    
    document.getElementById("Consultas").appendChild(Tabl);;
}
/////////Consulta para ver esta madrola descifrada

function Consulta2() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "./consultarDes", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(null);
    xhr.onreadystatechange = function() {
            // si la respuesta fue exitosa
        if(xhr.readyState == 4 && xhr.status == 200) {
            limpiardivCon();
            limpiardivCon2();
            console.log();
            var longitud = JSON.parse(xhr.responseText).length;   
            var json = JSON.parse(xhr.responseText);
            Tabla2(json, json[0].length);
        }
        // si la respuesta trajo error
        else if(xhr.readyState == 4 && xhr.status != 200){
               
        }
    }
}

function Tabla2(json, longitud) {
    var Tabl = document.createElement("table");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var tr = document.createElement("tr");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    th1.innerHTML="Nombre";
    th2.innerHTML="Email";
    th3.innerHTML="Edad";
    th4.innerHTML="Telefono";
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    thead.appendChild(tr);
    Tabl.appendChild(thead);
    Tabl.setAttribute("class","responsive-table"); 
    thead.setAttribute("id","col s5");
    for (var i = 0; i <= longitud -1; i++) {
        var th1a = document.createElement("th");
        var th2a = document.createElement("th");
        var th3a = document.createElement("th");
        var th4a = document.createElement("th");
        var tra = document.createElement("tr"); 
        console.log("Esto es el json " + JSON.stringify(json[i])+" mas la longitud"+ longitud);
        var nombre = document.createTextNode(JSON.stringify(json[0][i].nom));
        var ema = document.createTextNode(JSON.stringify(json[0][i].ema));
        var edad = document.createTextNode(JSON.stringify(json[0][i].edad));
        var tel = document.createTextNode(JSON.stringify(json[0][i].tel));
        th1a.appendChild(nombre);
        th2a.appendChild(ema);
        th3a.appendChild(edad);
        th4a.appendChild(tel);
        tra.appendChild(th1a);
        tra.appendChild(th2a);
        tra.appendChild(th3a);
        tra.appendChild(th4a);
        tbody.appendChild(tra);
        Tabl.appendChild(tbody);
    }
    document.getElementById("Consultas2").appendChild(Tabl);
}