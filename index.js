
//MENÚ DESPEGABLE
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const menuLista = document.getElementById("menu-lista");

    menuToggle.addEventListener("click", () => {
        menuLista.style.display = menuLista.style.display === "flex" ? "none" : "flex";
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener("click", (event) => {
        if (!menuToggle.contains(event.target) && !menuLista.contains(event.target)) {
            menuLista.style.display = "none";
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".derecha, .izquierda");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

