var sebastian = {
    nombre: 'sebastian',
    apellido: 'calapsu',
    altura: 1.73
}
var diana = {
    nombre: 'diana',
    apellido: 'castro',
    altura: 1.70
}
var santiago = {
    nombre: 'santiago',
    apellido: 'martinez',
    altura: 1.80
}
var catalina = {
    nombre: 'catalina',
    apellido: 'vuitriago',
    altura: 1.69
}
var mariana = {
    nombre: 'mariana',
    apellido: 'ospina',
    altura: 1.71
}

const esAlta = ({altura}) => altura >= 1.70
const esBaja = ({altura}) => altura < 1.70


var personas = [sebastian, diana, santiago, catalina, mariana]

var personas_altas = personas.filter(esAlta)
var personas_bajas = personas.filter(esBaja)