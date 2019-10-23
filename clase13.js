var sebastian = {
    nombre: 'sebastian',
    apellido: 'calapsu',
    edad: 23,
    peso: 73
}

console.log(`al inicio del año ${sebastian.nombre} pesa ${sebastian.peso} kg`)

/*function aumetardepeso(persona){
    return persona.peso += 200
}*/

const INCREMENTO_PESO = 0.2
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO


for (var i = 1; i <= DIAS_DEL_AÑO; i++) {
    var ramdon = Math.random()

    if (ramdon < 0.25){
        aumentarDePeso(sebastian)
    }

    else if (ramdon < 0.5){
        bajarDePeso(sebastian)
    }
}

console.log(`al final del año ${sebastian.nombre} pesa ${sebastian.peso.toFixed(1)} kg`)