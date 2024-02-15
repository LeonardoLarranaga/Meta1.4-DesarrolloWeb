const claves = [12395, 57239, 16568, 17532, 30928, 57239, 94124, 18471, 48303, 48175]

const nombres = ['Alejandra Ramirez', 'Javier Lopez', 'Valentina Hernandez', 'Diego Garcia', 'Camila Martinez', 'Santiago Rodriguez', 'Isabella Gomez', 'Mateo Torres', 'Renata Flores', 'Emiliano Vargas']

let elementoRandom = function(lista) {
    return lista[Math.floor(Math.random() * lista.length)]
}

let calificacionRandom = function() {
    return Math.floor(Math.random() * 101)
}

let fechaRandom = function() {
    const dateInicial = new Date("2021-01-01")
    const dateFinal = new Date("2023-06-30")

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
    const fecha = new Date()
    fecha.setMonth(fecha.getMonth() - 6)
    console.log(fecha)

    
}