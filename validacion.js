var campoNombre = document.querySelector("#nombre");
var mensajeCampoNombre = document.querySelector(".mensaje-campo-nombre");
campoNombre.onblur = function () {
    if (this.value.trim() == "") {
        mensajeCampoNombre.innerHTML = "El campo nombre no puede estas vacio!";
        mensajeCampoNombre.className += " alert alert-danger";
    }
}
campoNombre.oninput = function () {
    if (this.value.trim().length < 3) {
        mensajeCampoNombre.innerHTML = "El campo nombre debe tener mas de 3 letras!";
        mensajeCampoNombre.className += " alert alert-danger";
    }else{
        mensajeCampoNombre.innerHTML = "" 
        mensajeCampoNombre.className -= " alert alert-danger"; 
    }
}

var campoApellido = document.querySelector("#apellido");
var mensajeCampoApellido = document.querySelector(".mensaje-campo-apellido");
campoApellido.onblur = function () {
    if (this.value.trim() == "") {
        mensajeCampoApellido.innerHTML = "El campo apellido no puede estas vacio!";
        mensajeCampoApellido.className += " alert alert-danger";
    }
}
campoApellido.oninput = function () {
    if (this.value.trim().length < 3) {
        mensajeCampoApellido.innerHTML = "El campo apellido debe tener mas de 3 letras!";
        mensajeCampoApellido.className += " alert alert-danger";
    }else{
        mensajeCampoApellido.innerHTML = "" 
        mensajeCampoApellido.className -= " alert alert-danger"; 
    }
}

var campoEdad = document.querySelector("#edad");
var mensajeCampoEdad = document.querySelector(".mensaje-campo-edad");

campoEdad.onblur = function () {
    if (this.value == "") {
        mensajeCampoEdad.innerHTML = "El campo edad no puede estas vacio!";
        mensajeCampoEdad.className += " alert alert-danger";
    }else if (this.value > 150) {
        mensajeCampoEdad.innerHTML = "El campo edad debe ser menor a 150";
        mensajeCampoEdad.className += " alert alert-danger";
    }else{
        mensajeCampoEdad.innerHTML = "" 
        mensajeCampoEdad.className -= " alert alert-danger"; 
    }
}

var regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
var campoEmail = document.querySelector("#email");
var mensajeCampoEmail = document.querySelector(".mensaje-campo-email");
campoEmail.onblur = function () {
    if (this.value.trim() == "") {
        mensajeCampoEmail.innerHTML = "El campo email no puede estas vacio!";
        mensajeCampoEmail.className += " alert alert-danger";
    }else if (!regexEmail.test(this.value)) {
            mensajeCampoEmail.innerHTML = "El campo email no tiene el formato adecuado";
            mensajeCampoEmail.className += " alert alert-danger";
    }else{
            mensajeCampoEmail.innerHTML = "" 
            mensajeCampoEmail.className -= " alert alert-danger"; 
        }
}


var campoContrasenia = document.querySelector("#contrasenia");
var mensajeCampoContrasenia = document.querySelector(".mensaje-campo-contrasenia");
campoContrasenia.onblur = function () {
    if (this.value.trim() == "") {
        mensajeCampoContrasenia.innerHTML = "El campo contraseñao no puede estas vacio!";
        mensajeCampoContrasenia.className += " alert alert-danger";
    }
}
campoContrasenia.oninput = function () {
    if (this.value.trim().length < 8) {
        mensajeCampoContrasenia.innerHTML = "El campo contraseña debe tener al menos 8 caracteres!";
        mensajeCampoContrasenia.className += " alert alert-danger";
    }else{
        mensajeCampoContrasenia.innerHTML = "" 
        mensajeCampoContrasenia.className -= " alert alert-danger"; 
    }
}

var campoConfirmarContrasenia = document.querySelector("#confirmar-contrasenia");
var mensajeCampoConfirmarContrasenia = document.querySelector(".mensaje-campo-confirmar");
campoConfirmarContrasenia.onblur = function () {
    if (this.value.trim() == "") {
        mensajeCampoConfirmarContrasenia.innerHTML = "El campo confirmar contraseña no puede estar vacio!";
        mensajeCampoConfirmarContrasenia.className += " alert alert-danger";
     }
}
campoConfirmarContrasenia.oninput = function () {
    if (!(this.value == campoContrasenia.value)) {
        mensajeCampoConfirmarContrasenia.innerHTML = "Las contraseñas no coinciden!!";
        mensajeCampoConfirmarContrasenia.className += " alert alert-danger";
    }else{
        mensajeCampoConfirmarContrasenia.innerHTML = "" 
        mensajeCampoConfirmarContrasenia.className -= " alert alert-danger"; 
    }
}
var formulario = document.querySelector(".formulario");
formulario.onsubmit = function (event) {
    if (campoContrasenia.value.trim() == "") {
        alert("Hay campos sin completar");
        event.preventDefault();
    }else if (campoConfirmarContrasenia.value.trim() == "") {
        alert("Hay campos sin completar");
        event.preventDefault();
    }else if (campoNombre.value.trim() == "") {
        alert("Hay campos sin completar");
        event.preventDefault();
    }else if (campoApellido.value.trim() == "") {
        alert("Hay campos sin completar");
        event.preventDefault();
    }else if (campoEdad.value.trim() == "") {
        alert("Hay campos sin completar");
        event.preventDefault();
    }else if (campoEmail.value.trim() == "") {
        alert("Hay campos sin completar");
        
    }else {
        formulario.style.display = "hidden";
        event.preventDefault();
        alert("Registro exitoso");
        
    }
}