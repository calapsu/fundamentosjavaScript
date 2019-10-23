var sacha = {
    nombre: 'sebastian',
    apellido: 'calapsu',
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: true,
    drone: true
}

function imprimir_Profesiones(persona) {
    console.log(`${persona.nombre} es:`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    }else{
        console.log('no es ingeniero')
    }

    if (persona.cocinero){
        console.log('cocinero')
    }

    if (persona.cantante){
        console.log('cantante')
    }

    if (persona.dj){
        console.log('dj')
    }

    if (persona.guitarrista){
        console.log('guitarrista')
    }

    if (persona.drone){
        console.log('piloto de drone')
    }

}

imprimir_Profesiones(sacha)