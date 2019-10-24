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

const INCREMENTO_PESO = 0.3
const DIAS_DEL_AÑO = 365

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const bajarDePeso = persona => persona.peso -= INCREMENTO_PESO
const comemucho = () => Math.random() < 0.3
const ejercisio = () => Math.random() < 0.4

const META = sebastian.peso - 3
var dias = 0

while (sebastian.peso > 3) {
    if (comemucho()) {
        aumentarDePeso(sebastian)
    }
    if (ejercisio()) {
        bajarDePeso(sebastian)
    }

    dias += 1
}


console.log(`pasaron ${dias} dias hasta que ${sebastian.nombre} adelgazo 3kg`)