// //5. Plan de datos:
// Simula el consumo de datos de un plan móvil. Crea una variable para almacenar el límite de datos y otra para el consumo actual. Utiliza por ejemplo un ciclo while para ir incrementando el consumo hasta alcanzar o superar el límite. Cuando se supere el límite, muestra un mensaje indicando que se ha alcanzado el límite de datos.

let limiteDatos = 10;
let consumoActual ='0';

const intervalo = setInterval(() => {
    if (consumoActual < limiteDatos) {
        consumoActual++;
        console.log(`Tu consumo es de ${consumoActual} ${consumoActual == 1 ? 'Giga' : 'Gigas'}.`)
    } else {
        console.log(`Llegaste a tu límite de ${consumoActual} de Gigas.`);
        clearInterval(intervalo);
    }
}, 1000);
