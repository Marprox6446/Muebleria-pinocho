document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("modal");
    var acceptBtn = document.getElementById("accept-btn");

    // Mostrar la ventana modal al cargar la página
    modal.style.display = "block";

    // Aceptar términos y cerrar la ventana modal
    acceptBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Verificar si el usuario ya aceptó los términos y condiciones
    if (document.cookie.includes('aceptado_terminos')) {
        // No mostrar los términos y condiciones
        document.getElementById("terms-container").style.display = "none";
    } else {
        // Mostrar el cuadro de términos y condiciones
        document.getElementById("terms-container").style.display = "block";
    }
});

// Cuando el usuario acepta los términos y condiciones
function aceptarTerminos() {
    // Verificar si la cookie ya existe
    if (!document.cookie.includes('aceptado_terminos')) {
        // Establecer una cookie con una duración de validez
        document.cookie = 'aceptado_terminos=true; max-age=31536000'; // La cookie dura un año
        // Ocultar el recuadro de términos y condiciones
        document.getElementById("terms-container").style.display = "none";
    }
}
