function persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

persona.prototype.saludar = function (){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

var sebastian = new persona('sebastian','calapsu', 1.75)
var erika = new persona('erika','calapsu', 1.80)
var santiago = new persona ('santiago','medez', 1.65)

persona.prototype.soyalto = function() {
    if (this.altura > 1.70){
        console.log(`${this.nombre} es alto`)
    }else{
        console.log(`${this.nombre} es bajo`)
    }
    
}