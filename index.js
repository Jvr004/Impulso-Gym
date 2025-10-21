let imagenes = [
    { url: "./aset/Imgs/g11.jpg" },
    { url: "./aset/Imgs/g12.jpg" },
    { url: "./aset/Imgs/g13.jpg" },
    { url: "./aset/Imgs/g14.jpg" }
];
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let actual = 0;

// Mostrar la imagen inicial
imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="gym" loading="lazy">`;

//Boton retroceder

atras.addEventListener('click', function () {
    actual--;
    if (actual < 0) {
        actual = imagenes.length - 1;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="gym" loading="lazy">`;
});

//Boton avanzar

adelante.addEventListener('click', function () {
    actual++;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="gym" loading="lazy">`;
});

// Avance automático cada 2 segundos
setInterval(() => {
    actual++;
    if (actual >= imagenes.length) {
        actual = 0;
    }
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="gym" loading="lazy">`;
}, 2000);