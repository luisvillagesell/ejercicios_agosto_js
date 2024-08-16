// Definición de los productos disponibles en la máquina
let maquina = [
    { "nombre": "Coca-Cola", "precio": 5.00 },
    { "nombre": "Pepsi", "precio": 4.70 },
    { "nombre": "Dolly", "precio": 4.80 },
    { "nombre": "Simba", "precio": 4.90 },
    { "nombre": "Fanta", "precio": 5.10 },
    { "nombre": "Sprite", "precio": 6.00 },
    { "nombre": "Paso de los Toros", "precio": 7.00 },
    { "nombre": "Coca-Cola Zero", "precio": 10.00 },
];

// Objeto que contiene las tasas de cambio para convertir a una moneda base (USD)
let tasasDeCambio = {
    "usd": 1,       // Tasa de cambio para dólares (base)
    "arg": 0.003,   // Tasa de cambio para pesos argentinos a dólares
    "brl": 0.20     // Tasa de cambio para reales brasileños a dólares
};

// Función que maneja la inserción de dinero y la transacción del producto
function insertMoney() {
    // Obtener el índice del producto seleccionado por el usuario desde el select
    let productoSeleccionadoIndex = document.getElementById('producto').value;
    // Obtener la moneda seleccionada por el usuario
    let tipoMoneda = document.getElementById('tipo_moneda').value;
    // Obtener la cantidad de dinero ingresada por el usuario
    let dineroIngresado = parseFloat(document.getElementById('ingreso_dinero').value);
    // Elemento del DOM donde se mostrará el cambio o mensajes de error
    let cambioDiv = document.getElementById('cambio');

    // Guardar la moneda seleccionada y el dinero ingresado en localStorage para persistencia
    localStorage.setItem('productoSeleccionadoIndex', productoSeleccionadoIndex);
    localStorage.setItem('tipoMoneda', tipoMoneda);
    localStorage.setItem('dineroIngresado', dineroIngresado);

    // Obtener el producto seleccionado de la lista utilizando el índice capturado
    let productoSeleccionado = maquina[productoSeleccionadoIndex];

    // Convertir el dinero ingresado a la moneda base (USD) usando la tasa de cambio
    let dineroEnUSD = dineroIngresado / tasasDeCambio[tipoMoneda];

    // Verificar si el dinero ingresado es suficiente para comprar el producto
    if (dineroEnUSD >= productoSeleccionado.precio) {
        // Calcular el cambio que se debe devolver
        let cambio = dineroEnUSD - productoSeleccionado.precio;
        // Convertir el cambio de vuelta a la moneda seleccionada por el usuario
        let cambioEnMonedaSeleccionada = cambio * tasasDeCambio[tipoMoneda];
        // Mostrar un mensaje exitoso con el cambio en la moneda seleccionada
        cambioDiv.textContent = `Puede tomar el producto ${productoSeleccionado.nombre}. Su cambio es de ${cambioEnMonedaSeleccionada.toFixed(2)} en ${tipoMoneda.toUpperCase()}.`;
    } else {
        // Calcular cuánto dinero falta para poder comprar el producto
        let dineroFaltante = productoSeleccionado.precio - dineroEnUSD;
        // Convertir la cantidad faltante a la moneda seleccionada
        let dineroFaltanteEnMonedaSeleccionada = dineroFaltante * tasasDeCambio[tipoMoneda];
        // Mostrar un mensaje de error indicando cuánto dinero falta
        cambioDiv.textContent = `No te alcanza. Te faltan ${dineroFaltanteEnMonedaSeleccionada.toFixed(2)} en ${tipoMoneda.toUpperCase()}.`;
    }
}

// Función para cargar los datos guardados en localStorage cuando se carga la página
function cargarDatos() {
    // Recuperar el índice del producto seleccionado previamente, si existe
    let productoSeleccionadoIndex = localStorage.getItem('productoSeleccionadoIndex');
    // Recuperar la moneda seleccionada previamente, si existe
    let tipoMonedaGuardada = localStorage.getItem('tipoMoneda');
    // Recuperar la cantidad de dinero ingresada previamente, si existe
    let dineroIngresadoGuardado = localStorage.getItem('dineroIngresado');

    // Si hay un producto seleccionado guardado, restaurarlo en el select
    if (productoSeleccionadoIndex) {
        document.getElementById('producto').value = productoSeleccionadoIndex;
    }

    // Si hay una moneda seleccionada guardada, restaurarla en el select
    if (tipoMonedaGuardada) {
        document.getElementById('tipo_moneda').value = tipoMonedaGuardada;
    }

    // Si hay una cantidad de dinero ingresada guardada, restaurarla en el input
    if (dineroIngresadoGuardado) {
        document.getElementById('ingreso_dinero').value = dineroIngresadoGuardado;
    }
}

// Función que se ejecuta cuando la página termina de cargar, para inicializar los datos
window.onload = function() {
    cargarDatos(); // Cargar los datos desde localStorage para mantener la persistencia
};
