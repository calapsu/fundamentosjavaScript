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

var juan = {
    nombre: 'juan',
    apellido: 'medez',
    edad: 13
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


var mayoria_edad = 18

function Mayor_de_edad(persona){
    return persona.edad >= mayoria_edad
}



function imprimir_si_mayor_Edad(persona){
    //sebastian es mayor de edad
    //sacha es menor de edad 
    if(Mayor_de_edad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}