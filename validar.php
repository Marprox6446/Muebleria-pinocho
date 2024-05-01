<?php
// Verificar si se han enviado datos por el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];
    $contrasena = $_POST["contrasena"];

    // Validar los datos (puedes agregar más validaciones según tus necesidades)
    if (empty($nombre) || empty($correo) || empty($contrasena)) {
        // Si algún campo está vacío, redireccionar de vuelta al formulario de registro con un mensaje de error
        header("Location: registro.php?error=campos_vacios");
        exit();
    } else {
        // Conectar a la base de datos (debes tener las credenciales de conexión configuradas)
        $conexion = new mysqli("localhost", "usuario", "contrasena", "basededatos");

        // Verificar la conexión
        if ($conexion->connect_error) {
            die("Error de conexión: " . $conexion->connect_error);
        }

        // Preparar la consulta SQL para insertar el nuevo usuario en la base de datos
        $sql = "INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)";

        // Preparar la declaración
        $stmt = $conexion->prepare($sql);

        // Enlazar los parámetros con los valores
        $stmt->bind_param("sss", $nombre, $correo, $contrasena_hash);

        // Hashear la contraseña antes de almacenarla en la base de datos (para mayor seguridad)
        $contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

        // Ejecutar la consulta
        if ($stmt->execute()) {
            // Redireccionar a una página de éxito después de registrar al usuario
            header("Location: USUARIO.html");
            exit();
        } else {
            // Si ocurre algún error al ejecutar la consulta, redireccionar de vuelta al formulario con un mensaje de error
            header("Location: USUARIO.html?error=registro_fallido");
            exit();
        }

        // Cerrar la conexión y liberar los recursos
        $stmt->close();
        $conexion->close();
    }
} else {
    // Si se intenta acceder directamente a este script sin enviar datos por POST, redireccionar al formulario de registro
    header("Location: USUARIO.html");
    exit();
}

header("Location: USUARIO.html");
exit;
?>
