function validarFormulario() {
    // Obtener los valores de los campos
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;
    var nombre = document.getElementById("nombre").value;
    var domicilio = document.getElementById("domicilio").value;
    var correo = document.getElementById("correo").value;
    var nacionalidad = document.getElementById("nacionalidad").value;
    var comentarios = document.getElementById("comentarios").value;
    var aceptar = document.getElementById("aceptar").checked;

    // Validar que todos los campos obligatorios estén llenos
    if (!usuario || !contrasena || !nombre || !domicilio || !correo || !nacionalidad || !comentarios || !aceptar) {
        mostrarError("Todos los campos son obligatorios y debes aceptar los términos y servicios.");
        return false;
    }

    // Si todos los campos están llenos, mostrar mensaje de éxito
    mostrarExito("Datos enviados exitosamente.");
    return true;
}

function mostrarError(mensaje) {
    var errorElement = document.getElementById("error-msg");
    errorElement.innerHTML = mensaje;
    errorElement.classList.add("show"); // Agregar clase para mostrar
}

function mostrarExito(mensaje) {
    var exitoElement = document.getElementById("success-msg");
    exitoElement.innerHTML = mensaje;
    exitoElement.classList.add("show"); // Agregar clase para mostrar
}


