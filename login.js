document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;
  
    // Verificar si es administrador
    var esAdmin = correo === 'jisusemmanul@gmail.com' && contrasena === 'admin123';
  
    // Simular inicio de sesión (aquí podrías hacer una petición AJAX a un servidor)
    if (esAdmin) {
      // Si es administrador, redirigir al catálogo con permisos de administrador
      window.location.href = 'catalogo_admin.html';
    } else {
      // Si es cliente o credenciales incorrectas, redirigir al catálogo normal
      window.location.href = 'catalogo_cliente.html';
    }
  });