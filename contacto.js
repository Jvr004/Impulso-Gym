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

    //validarnombre
    if (nombre.trim() === '') {
        nombreError.innerHTML = '*El campo NOMBRE debe estar completo*';
        validado = false;
    } else if (nombre.trim().length < 3) {
        nombreError.innerHTML = '*debe contener 3 caracteres como mínimo*';
        validado = false;
    } else {
        nombreError.textContent = '';
    }

    // validar apellido
    if (apellido.trim() === '') {
        apellidoError.innerHTML = '*El campo APELLIDO debe estar completo*';
        validado = false;
    } else if (apellido.trim().length < 3) {
        apellidoError.innerHTML = '*debe contener 3 caracteres como mínimo*';
        validado = false;
    } else {
        apellidoError.textContent = '';
    }

    // validar correo
    if (email.trim() === '') {
        emailError.innerHTML = '*El campo CORREO debe estar completo*';
        validado = false;
    } else if (!reg_correo.test(email)) {
        emailError.innerHTML = '*error debe ser ejemplo: algo@algo.com*';
        validado = false;
    } else {
        emailError.textContent = '';
    }

    mensajes.innerHTML = '';

    //mostrar el mensaje abajo, si es falso que hay error sino mostrar los datos
    if (!validado) {
        let p = document.createElement("p");
        p.innerHTML = "Hay errores en el formulario";
        p.style.textAlign = "center";
        p.style.color = "red";
        mensajes.appendChild(p);
        return false;
    } else {
        let p = document.createElement("p");
        let p2 = document.createElement("p");
        p.innerHTML = "¡Gracias " + nombre + " por ponerte en contacto con nosotros!";
        p.style.textAlign = "center";
        p.style.fontWeight = "bold";

        p2.innerHTML = "¡Pronto nos comunicaremos contigo!";
        p2.style.textAlign = "center";

        mensajes.appendChild(p);
        mensajes.appendChild(p2);

        form.reset();
        return false;
    }
}

// clase del boton
const botonInicio = document.querySelector(".button1");

// funcion vuelve al inicio
function volverInicio() {
    window.location.href = "index.html";
}

// escuchar el click y llamar a la funcion
botonInicio.addEventListener("click", volverInicio);