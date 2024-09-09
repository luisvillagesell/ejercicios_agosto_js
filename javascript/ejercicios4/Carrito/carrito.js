// Espera a que el DOM esté completamente cargado antes de ejecutar el código.
document.addEventListener('DOMContentLoaded', () => {
    // Realiza una solicitud para obtener el archivo JSON de productos.
    fetch('productos.json')
        .then(respuesta => respuesta.json()) // Convierte la respuesta en formato JSON.
        .then(productos => mostrarProductos(productos)); // Llama a la función mostrarProductos con los productos obtenidos.

    // Obtiene el enlace del carrito y el contenedor del carrito del DOM.
    const enlaceCarrito = document.getElementById('enlace-carrito');
    const carrito = document.getElementById('carrito');

    // Agrega un evento para mostrar/ocultar el carrito cuando se hace clic en el enlace.
    enlaceCarrito.addEventListener('click', () => {
        // Cambia el estilo de visualización del carrito entre 'none' y 'block'.
        carrito.style.display = carrito.style.display === 'none' || carrito.style.display === '' ? 'block' : 'none';
        // Alterna la clase 'carrito-visible' en el contenedor de la página para efectos de estilo.
        document.querySelector('.contenedor-responsivo').classList.toggle('carrito-visible');
    });

    // Actualiza la visualización del carrito cuando se carga la página.
    actualizarVisualizacionCarrito();
});
// muestra los productos en la página.
function mostrarProductos(productos) {
    // Obtiene el contenedor donde se mostrarán los productos.
    const listaProductos = document.getElementById('lista-productos');

    // Recorre la lista de productos y crea elementos HTML para cada uno.
    productos.forEach(producto => {
        const elementoProducto = document.createElement('div'); // Crea un contenedor para el producto.
        elementoProducto.classList.add('producto'); // Añade la clase 'producto' para estilo.
        // Inserta el contenido HTML del producto (imagen, nombre, descripción, precio y botón).
        elementoProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>$${producto.precio.toFixed(2)}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Agregar al carrito</button>
        `;
        listaProductos.appendChild(elementoProducto); // Añade el producto al contenedor de productos.
    });
}

// añade un producto al carrito.
function agregarAlCarrito(id, nombre, precio) {
    // Obtiene el carrito de localStorage o crea uno vacío si no existe.
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Busca si el producto ya está en el carrito.
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        // Si el producto ya existe, incrementa su cantidad.
        productoExistente.cantidad += 1;
    } else {
        // Si no existe, lo añade con cantidad 1.
        carrito.push({ id, nombre, precio, cantidad: 1 });
    }

    // Guarda el carrito actualizado en localStorage.
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Actualiza la visualización del carrito.
    actualizarVisualizacionCarrito();
}

// elimina un producto del carrito.
function eliminarDelCarrito(id) {
    // Obtiene el carrito de localStorage o crea uno vacío si no existe.
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Filtra los productos para eliminar el que tiene el ID indicado.
    carrito = carrito.filter(item => item.id !== id);
    // Guarda el carrito actualizado en localStorage.
    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Actualiza la visualización del carrito.
    actualizarVisualizacionCarrito();
}

// aumenta la cantidad de un producto en el carrito.
function aumentarCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
        // Si el producto existe, incrementa su cantidad.
        productoExistente.cantidad += 1;
        // Guarda el carrito actualizado y actualiza la visualización.
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarVisualizacionCarrito();
    }
}

// disminuye la cantidad de un producto en el carrito.
function disminuirCantidad(id) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente && productoExistente.cantidad > 1) {
        // Disminuye la cantidad solo si es mayor que 1.
        productoExistente.cantidad -= 1;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarVisualizacionCarrito();
    }
}

// actualiza la visualización del carrito (cantidad, productos, precio total).
function actualizarVisualizacionCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || []; // Obtiene el carrito.
    const itemsCarrito = document.getElementById('items-carrito'); // Contenedor de los productos en el carrito.
    const contadorCarrito = document.getElementById('contador-carrito'); // Contador del carrito.
    const contadorCarrito2 = document.getElementById('contador-carrito2'); // Otro contador (si hay dos visualizaciones).
    const precioTotal = document.getElementById('precio-total'); // Contenedor del precio total.

    itemsCarrito.innerHTML = ''; // Limpia el contenido del carrito.
    let total = 0; // Variable para el total del precio.

    // Recorre los productos del carrito y los muestra.
    carrito.forEach(item => {
        const itemCarrito = document.createElement('div'); // Crea un elemento para el producto.
        itemCarrito.classList.add('item-carrito'); // Añade la clase 'item-carrito' para estilo.
        itemCarrito.innerHTML = `
            <span>${item.nombre} (x${item.cantidad})</span>
            <span>$${(item.precio * item.cantidad).toFixed(2)}</span>
            <button onclick="aumentarCantidad(${item.id})">+</button>
            <button onclick="disminuirCantidad(${item.id})">-</button>
            <button class="eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        itemsCarrito.appendChild(itemCarrito); // Añade el producto al carrito visualmente.
        total += item.precio * item.cantidad; // Calcula el total del precio.
    });

    // Actualiza los contadores del carrito.
    contadorCarrito.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    contadorCarrito2.textContent = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    // Muestra el precio total.
    precioTotal.textContent = `$${total.toFixed(2)}`;

    // Si hay productos en el carrito, añade el botón 'Finalizar Compra'.
    const resumenCompra = document.querySelector('.resumen-compra');
    if (carrito.length > 0 && !document.getElementById('finalizar-compra')) {
        const botonFinalizar = document.createElement('button'); // Crea el botón.
        botonFinalizar.id = 'finalizar-compra'; // Añade ID al botón.
        botonFinalizar.textContent = 'Finalizar Compra'; // Texto del botón.
        botonFinalizar.onclick = finalizarCompra; // Asocia el evento para finalizar compra.
        resumenCompra.appendChild(botonFinalizar); // Añade el botón al resumen de compra.
    } else if (carrito.length === 0) {
        // Si no hay productos, elimina el botón de finalizar compra si existe.
        const botonFinalizar = document.getElementById('finalizar-compra');
        if (botonFinalizar) {
            botonFinalizar.remove();
        }
    }
}

// muestra el modal de finalizar compra y limpia el carrito.
function finalizarCompra() {
    document.getElementById('modalPersonalizado').style.display = 'block'; // Muestra el modal.
    localStorage.removeItem('carrito'); // Elimina el carrito de localStorage.
    actualizarVisualizacionCarrito(); // Actualiza el carrito para reflejar que está vacío.
}

// cierra el modal de finalizar compra.
function cerrarModal() {
    document.getElementById('modalPersonalizado').style.display = 'none'; // Oculta el modal.
}

// cierra el modal si se hace clic fuera de él.
window.onclick = function(evento) {
    if (evento.target == document.getElementById('modalPersonalizado')) {
        cerrarModal(); // Cierra el modal.
    }
}
