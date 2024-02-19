const claves = [12395, 57239, 16568, 17532, 30928, 57239, 94124, 18471, 48303, 48175]

const nombres = ['Alejandra Ramirez', 'Javier Lopez', 'Valentina Hernandez', 'Diego Garcia', 'Camila Martinez', 'Santiago Rodriguez', 'Isabella Gomez', 'Mateo Torres', 'Renata Flores', 'Emiliano Vargas']

let elementoRandom = function(lista) {
    return lista[Math.floor(Math.random() * lista.length)]
}

let calificacionRandom = function() {
    return Math.round(Math.random() * 10000) / 100;
}

let fechaRandom = function() {
    const dateInicial = new Date("2021-01-01")
    const dateFinal = new Date("2024-06-30")

    return new Date(dateInicial.getTime() + Math.random() * (dateFinal.getTime() - dateInicial.getTime()))
}

let creditoRandom = function() {
    return Math.floor(Math.random() * 5) + 4
}

const registros = []

N = process.argv[2]

for (let i = 0; i < N; i++) {
    registros.push({
        clave: elementoRandom(claves),
        creditos: creditoRandom(),
        nombre: elementoRandom(nombres),
        calificacion: calificacionRandom(),
        fecha: fechaRandom()
    })
}

let filtarRegistros = function(registros) {
    // Fecha actual menos seis meses:
    const fechaMenor = new Date()
    fechaMenor.setMonth(fechaMenor.getMonth() - 6)

    return registros.filter(r => r.calificacion < 60 && r.fecha > fechaMenor)
}

let mapearRegistros = function(registros) {
    return registros.map(r => ({
        clave: r.clave,
        calificacion: r.calificacion,
        fechaStr: `${r.fecha.getDate().toString().padStart(2, '0')}/${(r.fecha.getMonth() + 1).toString().padStart(2, '0')}/${r.fecha.getFullYear()}`
    }))
}

console.log("Registros:\n", registros)
console.log("\nRegistros con calificación menor a 60 y fecha mayor a fecha actual menos 6 meses:\n", mapearRegistros(filtarRegistros(registros)))