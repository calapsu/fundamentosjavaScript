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

function Imprimir_Nombre_Mayuscula({nombre}) {
    console.log(nombre.toUpperCase())
}

Imprimir_Nombre_Mayuscula(sacha)
Imprimir_Nombre_Mayuscula(dario)
Imprimir_Nombre_Mayuscula({nombre:'pepito'})
