let finDeTransmisionDeDatos = function(id) {
    console.log("Transferencia", id, "terminada.")   
}

let obtenDatosDeInternet = function(id, duracion, callback) {
    console.log("Proceso", id, "obteniendo datos de internet.")
    
    return new Promise(resolve => {
        setTimeout(() => {
            finDeTransmisionDeDatos(id)
            resolve()
        }, duracion)
    })
}

module.exports.getDatos = obtenDatosDeInternet