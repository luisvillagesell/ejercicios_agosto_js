// 3. Llamadas:
// Crea un programa que simule el registro de llamadas. Utiliza un arreglo para almacenar objetos que representen cada llamada (con propiedades como: número marcado, duración y fecha). Luego, utilizando un ciclo y condicionales, muestra un resumen de las llamadas, indicando las llamadas de más de 5 minutos.

let llamadas = [
    { numero: Math.floor(Math.random()*1000000000), duracion: 1, fecha: '2022-12-12'},
    { numero: Math.floor(Math.random()*1000000000), duracion: 7, fecha: '2022-12-12'},
    { numero: Math.floor(Math.random()*1000000000), duracion: 15, fecha: '2022-12-12'},
    { numero: Math.floor(Math.random()*1000000000), duracion: 3, fecha: '2022-12-12'},
    { numero: Math.floor(Math.random()*1000000000), duracion: 6, fecha: '2022-12-12'}
];

llamadas.forEach(function(llamadas){
    if(llamadas.duracion > 5) {
        console.log(`La llamada del número ${llamadas.numero} del día ${llamadas.fecha} tuvo una duración de ${llamadas.duracion} minutos`);
        } else {
            console.log(`La llamada del número ${llamadas.numero} del día ${llamadas.fecha}, tuvo una duración menor a 5 minutos. Fue de ${llamadas.duracion} ${llamadas.duracion > 1 ? 'minutos.' : 'minuto.'} `);
            
        }
})