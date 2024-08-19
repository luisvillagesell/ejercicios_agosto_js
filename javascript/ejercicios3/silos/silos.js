// Consigna: Simulación de una Planta de Silos
// Como desarrollador eres el encargado de desarrollar un sistema para gestionar el ingreso de camiones a una planta de silos que almacena soja y maíz.
//se debe poder manejar desde una pagina web.

let silos = [{
    tipoGrano: 'siloSoja',
    capacidad: 100000,
    ocupado: 0
},
{
    tipoGrano: 'siloMaiz',
    capacidad: 180000,
    ocupado: 0
}];

// Función para agregar grano al silo
function agregarGrano() {
    // Obtener tipo de grano desde el HTML (select)
    let tipoGrano = document.getElementById("tipoGrano").value;
    // Obtener cantidad de grano desde el HTML (input)
    let cantidadGrano = parseInt(document.getElementById("cantidadGrano").value);
    // Buscar el silo correspondiente
    let silo = silos.find(s => s.tipoGrano === tipoGrano);

    // Validar si el silo tiene capacidad suficiente
    if (silo && (silo.ocupado + cantidadGrano) <= silo.capacidad) {
        // Actualizar la cantidad de grano ocupado
        silo.ocupado += cantidadGrano;

        // Actualizar el almacenamiento local (localStorage)
        localStorage.setItem(tipoGrano, JSON.stringify(silo.ocupado));

        // Mostrar el stock actualizado en el HTML
        actualizarStockUI();
    } else {
        alert('No hay suficiente capacidad en el silo para almacenar el grano.');
    }
}

// Función para actualizar la UI con el stock de cada silo
function actualizarStockUI() {
    silos.forEach(silo => {
        let elementoId = silo.tipoGrano === 'siloSoja' ? 'siloSojaActualizado' : 'siloMaizActualizado';
        document.getElementById(elementoId).innerHTML = `Ocupado: ${silo.ocupado} \n - Capacidad: ${silo.capacidad}\n - Disponible: ${silo.capacidad - silo.ocupado}`;
    });
}

// Llamar a la función para mostrar el stock inicial cuando se carga la página
window.onload = actualizarStockUI;