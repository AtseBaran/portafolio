//Haz tú validación en javascript acá

function validar(){
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;
    
    if (nombre == "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }

    if (email == "") {
        alert("Por favor, ingresa tu email.");
        return false;
    }

    if (asunto == "") {
        alert("Por favor, ingresa tu asunto.");
        return false;
    }

    if (mensaje == "") {
        alert("Por favor, ingresa tu mensaje.");
        return false;
    }

    return true;
}