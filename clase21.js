function persona(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

persona.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var sebastian = new persona('sebastian','calapsu')
var erika = new persona('erika','calapsu')
var santiago = new persona ('santiago','medez')