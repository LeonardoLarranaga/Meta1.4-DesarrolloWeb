const servicio = require("./servicio-datos")

async function obtenerDatos() {
    await servicio.getDatos(1, 3000);
    await servicio.getDatos(2, 500);
    await servicio.getDatos(3, 4000);
    await servicio.getDatos(4, 700);
    await servicio.getDatos(5, 3500);
}

obtenerDatos();