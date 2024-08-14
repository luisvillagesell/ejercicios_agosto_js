// 2. Mensajes de texto:
// Simula una conversación de mensajes de texto. Crea un arreglo que contenga objetos, donde cada objeto represente un mensaje (con propiedades como: remitente, destinatario y contenido). Utiliza un “iterador” para recorrer el arreglo y mostrar cada mensaje en pantalla.

let mensajes = [{
    mensaje: 1,
    remitente: "Juan",
    destinatario: "Pedro",
    contenido: "Hola, ¿cómo estás?"
}, {
    mensaje: 2,
    remitente: "Pedro",
    destinatario: "Juan",
    contenido: "Estoy bien, gracias. ¿Y tú?"
}, {
    mensaje: 3,
    remitente: "Juan",
    destinatario: "Pedro",
    contenido: "Estoy bien, gracias."
}];   

function sms () {
    mensajes.forEach(m => {
        console.log(m)});
    }
    sms();

    

