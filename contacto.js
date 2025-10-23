let form = document.getElementById('miFormulario');
let primerElemento = document.querySelector('form input');
primerElemento.focus();
let reg_correo = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

function validar() {
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;

    let nombreError = document.getElementById('nombreError');
    let apellidoError = document.getElementById('apellidoError');
    let emailError = document.getElementById('emailError');
    let celularError = document.getElementById('celularError');
    let validado = true;
    let mensajes = document.getElementById('mensajes');
}