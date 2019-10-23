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


const MAYORIA_EDAD = 18

const Mayor_de_edad = ({edad}) =>  edad >= MAYORIA_EDAD
const Menor_de_edad = ({edad}) => edad < MAYORIA_EDAD



function imprimir_si_mayor_Edad(persona){
    //sebastian es mayor de edad
    //sacha es menor de edad 
    if(Mayor_de_edad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}


function permitir_Acceso(persona){
    if(!Mayor_de_edad(persona)) {
        console.log('ACCESO DENEGADO')
    }
}

function denegar(persona){
    if(!Menor_de_edad(persona)) {
        console.log('ACCESO CONSEDIDO')
    }
}