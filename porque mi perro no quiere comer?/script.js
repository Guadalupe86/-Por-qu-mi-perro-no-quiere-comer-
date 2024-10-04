// Función para mostrar el menú
document.getElementById("menu-toggle").addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
});

// Función para mostrar/ocultar soluciones
document.getElementById("mostrar-soluciones").addEventListener("click", () => {
    const soluciones = document.getElementById("lista-soluciones");
    soluciones.classList.toggle("hidden");
});

// Función para preguntas frecuentes
function toggleFAQ(id) {
    const faqAnswer = document.getElementById(id);
    faqAnswer.classList.toggle("hidden");
}
