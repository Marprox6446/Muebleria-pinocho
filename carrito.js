// Función para vaciar el carrito
function vaciarCarrito() {
    const carrito = document.getElementById('carrito');
    carrito.innerHTML = '';
    actualizarContadorCarrito();
  }
  
  // Función para realizar el pago
  function pagar() {
    // Aquí se implementaría la lógica para realizar el pago
    alert('¡Gracias por tu compra!');
    vaciarCarrito();
  }
  
  // Función para actualizar el contador de productos en el carrito
  function actualizarContadorCarrito() {
    const cantidadProductos = document.querySelectorAll('#carrito .producto-carrito').length;
    document.getElementById('contador-carrito').textContent = cantidadProductos;
  }