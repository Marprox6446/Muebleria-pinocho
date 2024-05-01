// Función para agregar un producto al carrito
function agregarAlCarrito(id) {
    const producto = document.querySelector('.producto[data-producto-id="' + id + '"]');
    
    // Clonar el producto y agregarlo al carrito
    const productoClonado = producto.cloneNode(true);
    const carrito = document.getElementById('carrito');
    carrito.appendChild(productoClonado);
    
    // Ocultar el botón de "Añadir al carrito"
    producto.querySelector('button').style.display = 'none';
    
    // Actualizar el contador de productos en el carrito
    actualizarContadorCarrito();
}

// Función para actualizar el contador de productos en el carrito
function actualizarContadorCarrito() {
    const cantidadProductos = document.querySelectorAll('#carrito .producto').length;
    document.getElementById('contador-carrito').textContent = cantidadProductos;
}
