function agregarACesta(nombreProducto) {
    // Obtener la lista de productos seleccionados (almacenada en el localStorage)
    var productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados')) || [];

    // Agregar el producto a la lista
    productosSeleccionados.push(nombreProducto);

    // Actualizar la lista en el localStorage
    localStorage.setItem('productosSeleccionados', JSON.stringify(productosSeleccionados));

    alert('Producto agregado a la cesta.');
}

document.addEventListener('DOMContentLoaded', mostrarCesta);

function mostrarCesta() {
    // Obtener la lista de productos seleccionados almacenada en localStorage
    var productosSeleccionados = JSON.parse(localStorage.getItem('productosSeleccionados')) || [];

    // Obtener el elemento donde se mostrará la lista de productos
    var listaCesta = document.getElementById('listaCesta');
    var mensajeCestaVacia = document.getElementById('mensajeCestaVacia');

    // Limpiar el contenido actual
    listaCesta.innerHTML = '';

    if (productosSeleccionados.length === 0) {
        mensajeCestaVacia.style.display = 'block';
    } else {
        mensajeCestaVacia.style.display = 'none';

        // Mostrar la lista de productos seleccionados
        productosSeleccionados.forEach(function (producto) {
            var li = document.createElement('li');
            li.textContent = producto;
            listaCesta.appendChild(li);
        });
    }
}
