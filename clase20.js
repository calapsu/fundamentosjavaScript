var sebastian = {
    nombre: 'sebastian',
    apellido: 'calapsu',
    altura: 1.73,
    cantidadelibros: 65
}
var diana = {
    nombre: 'diana',
    apellido: 'castro',
    altura: 1.70,
    cantidadelibros: 45
}
var santiago = {
    nombre: 'santiago',
    apellido: 'martinez',
    altura: 1.80,
    cantidadelibros: 45
}
var catalina = {
    nombre: 'catalina',
    apellido: 'vuitriago',
    altura: 1.69,
    cantidadelibros: 34
}
var mariana = {
    nombre: 'mariana',
    apellido: 'ospina',
    altura: 1.71,
    cantidadelibros: 56
}

var personas = [sebastian, diana, santiago, catalina, mariana]

//var acum = 0

//for (var i = 0; i < personas.length; i++) {
//    acum = acum + personas[i].cantidadelibros
//}

const reducer = (acum, personas) => {
    return acum + personas.cantidadelibros
}

var totalibros = personas.reduce(reducer, 0)

console.log(`en total todos tinen ${totalibros} libros`)