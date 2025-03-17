
document.addEventListener("DOMContentLoaded", function () {
    console.log("JS cargado correctamente");

/* ==== Activar / Desactivar Menú Hamburguesa ==== */
const menuToggle = document.getElementById("menu-toggle");
const menuLista = document.getElementById("menu-lista");

// Función para mostrar u ocultar el menú
const toggleMenu = () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    menuLista.style.display = isExpanded ? "none" : "flex";
};

// Evento para abrir/cerrar el menú al hacer clic en el botón
menuToggle.addEventListener("click", (e) => {
    e.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
    toggleMenu();
});

// Cerrar el menú al hacer clic en un enlace dentro de la lista
menuLista.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
        menuLista.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

// Cerrar el menú si el usuario hace clic fuera de él
document.addEventListener("click", (e) => {
    if (!menuLista.contains(e.target) && e.target !== menuToggle) {
        menuLista.style.display = "none";
        menuToggle.setAttribute("aria-expanded", "false");
    }
});

// Cerrar el menú si el cursor sale del área del menú
menuLista.addEventListener("mouseleave", () => {
    menuLista.style.display = "none";
    menuToggle.setAttribute("aria-expanded", "false");
});


    /* ==== Página Dinámica (Animaciones en scroll) ==== */
    const elements = document.querySelectorAll(".hidden");

    function checkScroll() {
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    if (elements.length > 0) {
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Ejecutar al inicio
    }

        /* ==== Nuevas Animaciones Dinámicas para Formularios ==== */
        const leftForm = document.querySelector('.form-left');
        const rightForm = document.querySelector('.form-right');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        });
    
        observer.observe(leftForm);
        observer.observe(rightForm);
    
        // Animación para el texto (ejemplo)
        const titles = document.querySelectorAll('h2');
        titles.forEach((title, index) => {
            title.style.animation = index % 2 === 0 ? 'slideInLeft 1s ease-out forwards' : 'slideInRight 1s ease-out forwards';
        });
    

    /* ==== Función del Botón "Registrar" ==== */
    const btnGenerarCodigo = document.getElementById("btnGenerarCodigo");

    if (btnGenerarCodigo) {
        btnGenerarCodigo.addEventListener("click", () => {
            const tipoServicio = document.getElementById("tipoServicio").value;
            const codigoAleatorio = Math.random().toString(36).substring(2, 7).toUpperCase();
            const codigoFinal = tipoServicio + codigoAleatorio;
            document.getElementById("codigoGenerado").textContent = "Código Generado: " + codigoFinal;
        });
    }

    /* ==== Función para Buscar Seguimiento ==== */
    const btnBuscarSeguimiento = document.getElementById("btnBuscarSeguimiento");

    if (btnBuscarSeguimiento) {
        btnBuscarSeguimiento.addEventListener("click", () => {
            const datosEnvio = {
                nombreApellido: "Juan Pérez",
                direccion: "Calle Falsa 123",
                telefono: "123-456-7890"
            };

            const datosRecibe = {
                nombreApellido: "María García",
                direccion: "Avenida Siempreviva 456",
                telefono: "987-654-3210"
            };

            document.getElementById("nombreApellidoEnvioSeguimiento").textContent = datosEnvio.nombreApellido;
            document.getElementById("direccionEnvioSeguimiento").textContent = datosEnvio.direccion;
            document.getElementById("telefonoEnvioSeguimiento").textContent = datosEnvio.telefono;

            document.getElementById("nombreApellidoRecibeSeguimiento").textContent = datosRecibe.nombreApellido;
            document.getElementById("direccionRecibeSeguimiento").textContent = datosRecibe.direccion;
            document.getElementById("telefonoRecibeSeguimiento").textContent = datosRecibe.telefono;
        });
    }
});

/*redireccionamiento de Gracias-Correo*/
document.getElementById("correo").addEventListener("submit", function (event) {
    setTimeout(() => {
        window.location.href = "https://saseyu.github.io/SEGHER/gracias.html";
    }, 2000); // Redirige después de 2 segundos
});


/*Botón Compartir*/
function compartir() {
    if (navigator.share) {
        navigator.share({
            title: "Visita mi sitio web",
            text: "Mira esta página increíble",
            url: "https://tupagina.com"
        }).then(() => console.log("Compartido con éxito"))
        .catch((error) => console.log("Error al compartir", error));
    } else {
        alert("Tu navegador no soporta la función de compartir");
    }
}
