document.addEventListener("DOMContentLoaded", () => {
    const mostrarData = document.getElementById("data");
    const valorGuardado = localStorage.getItem("inputValue");

    if (valorGuardado) {
        mostrarData.textContent = valorGuardado;
    } else {
        mostrarData.textContent = "No hay datos almacenados.";
    }
});