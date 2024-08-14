// 4. Aplicaciones:
// Crea un objeto literal que represente una aplicación de tu teléfono. Este objeto debe tener propiedades como: nombre, categoría, tamaño y calificación. Puedes utilizar un switch case para mostrar un mensaje diferente según la categoría de la aplicación (por ejemplo, "Juego", "Redes sociales", "Utilidad").

let aplicaciones = [
    {
        nombre: "Instagram",
        categoria: "Redes sociales",
        tamaño: "50MB",
        calificación: 4.5
    },
    {
        nombre: "WhatsApp",
        categoria: "Redes sociales",
        tamaño: "100MB",
        calificación: 4.8
    },
    {
        nombre: "Google Maps",
        categoria: "Utilidad",
        tamaño: "200MB",
        calificación: 4.9
    },
    {
        nombre: "PUBG",
        categoria: "Juego",
        tamaño: "1GB",
        calificación: 4.2
    },
    {
        nombre: "TikTok",
        categoria: "Redes sociales",
        tamaño: "500MB",
        calificación: 4.6
    },
    {
        nombre: "Adobe",
        categoria: "Utilidad",
        tamaño: "1GB",
        calificación: 4.7
    },
    {
        nombre: "Netflix",
        categoria: "Entretenimiento",
        tamaño: "1GB",
        calificación: 4.9
    }
];

function categoria(aplicacion) {
    switch (aplicacion.categoria) {
        case "Redes sociales":
            console.log(`La aplicación ${aplicacion.nombre} tiene una calificación de ${aplicacion.calificación}`);
            break;
        case "Utilidad":
            console.log(`La aplicación ${aplicacion.nombre} tiene una calificación de ${aplicacion.calificación}`);
            break;
        case "Juego":
            console.log(`La aplicación ${aplicacion.nombre} tiene una calificación de ${aplicacion.calificación}`);
            break;
        case "Entretenimiento":
            console.log(`La aplicación ${aplicacion.nombre} tiene una calificación de ${aplicacion.calificación}`);
            break;
        default:
            console.log(`La aplicación ${aplicacion.nombre} tiene una categoría desconocida.`);
    }
}


aplicaciones.forEach(app => categoria(app));
