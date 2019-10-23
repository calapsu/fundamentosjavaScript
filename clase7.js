var sacha = {
    nombre:'Sacha',
    apellido:'Calapsu',
    edad: 28
}

var dario = {
    nombre:'Dario',
    apellido:'cuencas',
    edad:27
}

function Imprimir_Nombre_Mayuscula(persona) {
    // var nombre  = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

Imprimir_Nombre_Mayuscula(sacha)
Imprimir_Nombre_Mayuscula(dario)
//Imprimir_Nombre_Mayuscula({nombre:'pepito'})

function saludo(persona){
    var {nombre,edad} = persona
    console.log(`hola me llamo ${nombre} y tego ${edad} años`)
}

saludo(sacha)
