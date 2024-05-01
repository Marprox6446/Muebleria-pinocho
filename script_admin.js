// Array para almacenar los productos agregados
let productos = [];

// Función para agregar un producto
function agregarProducto() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let descripcion = document.getElementById("descripcion").value;
    let precio = document.getElementById("precio").value;

    // Crear un objeto producto
    let producto = {
        nombre: nombre,
        descripcion: descripcion,
        precio: precio
    };

    // Agregar el producto al array
    productos.push(producto);

    // Limpiar el formulario
    limpiarFormulario();

    // Mostrar los productos
    mostrarProductos();
}

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("precio").value = "";
}

// Función para mostrar los productos
function mostrarProductos() {
    // Obtener el elemento donde se mostrarán los productos
    let listaProductos = document.getElementById("lista-productos");

    // Limpiar la lista antes de mostrar los productos
    listaProductos.innerHTML = "";

    // Recorrer el array de productos y crear elementos para mostrarlos
    productos.forEach(function(producto, index) {
        let item = document.createElement("li");
        item.textContent = `Nombre: ${producto.nombre}, Descripción: ${producto.descripcion}, Precio: ${producto.precio}`;
        listaProductos.appendChild(item);
    });
}
