from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(_name_)
app.secret_key = 'tu_clave_secreta'  # Clave secreta para la sesión

# Base de datos ficticia de productos
productos = [
    {"id": 1, "nombre": "Producto 1", "precio": 10},
    {"id": 2, "nombre": "Producto 2", "precio": 20},
    {"id": 3, "nombre": "Producto 3", "precio": 30}
]

# Datos de ejemplo de usuarios (se recomienda utilizar una base de datos en un entorno de producción)
usuarios = {
    'usuario1@example.com': {'contrasena': 'contraseña1', 'nombre': 'Usuario 1'},
    'usuario2@example.com': {'contrasena': 'contraseña2', 'nombre': 'Usuario 2'},
    # Agrega más usuarios si es necesario
}

@app.route('/')
def catalogo():
    if 'correo' in session:
        usuario = usuarios[session['correo']]
        return render_template('catalogo.html', productos=productos, nombre_usuario=usuario['nombre'])
    else:
        return redirect('/login')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        correo = request.form['correo']
        contrasena = request.form['contrasena']
        if correo in usuarios and usuarios[correo]['contrasena'] == contrasena:
            # Inicio de sesión exitoso, almacenamos el correo del usuario en la sesión
            session['correo'] = correo
            return redirect(url_for('catalogo'))
        else:
            # Credenciales incorrectas, redirigimos de nuevo a la página de inicio de sesión con un mensaje de error
            return render_template('login.html', mensaje_error='Credenciales incorrectas. Inténtalo de nuevo.')
    else:
        return render_template('login.html')

@app.route('/subir_producto', methods=['GET', 'POST'])
def subir_producto():
    if 'correo' in session:
        if request.method == 'POST':
            nombre = request.form['nombre']
            precio = request.form['precio']
            nuevo_producto = {"id": len(productos) + 1, "nombre": nombre, "precio": precio}
            productos.append(nuevo_producto)
            return redirect(url_for('catalogo'))
        else:
            return render_template('subir_producto.html')
    else:
        return redirect('/error_agregar_carrito')

@app.route('/eliminar_producto/<int:id>')
def eliminar_producto(id):
    if 'correo' in session:
        for producto in productos:
            if producto['id'] == id:
                productos.remove(producto)
                break
        return redirect(url_for('catalogo'))
    else:
        return redirect('/error_agregar_carrito')

@app.route('/editar_producto/<int:id>', methods=['GET', 'POST'])
def editar_producto(id):
    if 'correo' in session:
        producto_editar = next((producto for producto in productos if producto['id'] == id), None)
        if producto_editar:
            if request.method == 'POST':
                producto_editar['nombre'] = request.form['nombre']
                producto_editar['precio'] = request.form['precio']
                return redirect(url_for('catalogo'))
            else:
                return render_template('editar_producto.html', producto=producto_editar)
        else:
            return "Producto no encontrado."
    else:
        return redirect('/error_agregar_carrito')

@app.route('/error_agregar_carrito')
def error_agregar_carrito():
    return "Necesitas iniciar sesión para agregar productos al carrito."

if _name_ == '_main_':
    app.run(debug=True)
