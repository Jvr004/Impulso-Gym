const header = document.querySelector("header");
const footer = document.querySelector("footer");

// Insertando header 

header.innerHTML = `
    
        <menu class="menu-container">

            <nav class="navbar">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="funcional.html">Funcional</a></li>
                    <li><a href="boxeo.html">Boxeo</a></li>
                    <li><a href="tienda.html">Tienda</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </nav>

        </menu>

`;

// Insertando footer 

footer.innerHTML = `
                    
        <div class="links">
            <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="funcional.html">Funcional</a></li>
                    <li><a href="boxeo.html">Boxeo</a></li>
                    <li><a href="tienda.html">Tienda</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
            </ul>
        </div>

        <div class="redes-sociales">
            <ul>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">facebook</a></li>
            <li><a href="#">X</a></li>
        </div>
        `;
