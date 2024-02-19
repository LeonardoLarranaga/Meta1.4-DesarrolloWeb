let finDeTransmisionDeDatos = function(id) {
    console.log("Transferencia", id, "terminada.")   
}

let obtenDatosDeInternet = function(id, duracion, callback) {
    console.log("Proceso", id, "obteniendo datos de internet.")
    
    setTimeout(function() {
        finDeTransmisionDeDatos(id)
        if (callback) callback()
    }, duracion)
}

module.exports.getDatos = obtenDatosDeInternet