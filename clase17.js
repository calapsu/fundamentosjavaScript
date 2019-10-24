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

var personas = [sebastian, diana, santiago, catalina, mariana]

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}