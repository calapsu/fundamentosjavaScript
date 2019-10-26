class persona {
    constructor (nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn){
        var {nombre, apellido} = this

        console.log(`hola me llamo ${nombre} ${apellido}`)
        if (fn) {
            fn(nombre, apellido)
        }
    }

    soyalto(){
        return this.altura > 1.8
    }
}

class desarrollador extends persona {
    constructor (nombre,apellido,altura) {
        super(nombre,apellido,altura)
    }

    saludar(fn) {
        //var nombre = this.nombre
        //var apellido = this.apellido
        var {nombre, apellido} = this

        console.log(`hola me llamo ${nombre} ${apellido} y soy desarrollador`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}
function responderSaludo(nombre, apellido, esDev) {
    console.log(`buen dia ${nombre} ${apellido} `)
    if (esDev){
        console.log(`a mira no sabias que eras desarrollador`)
    }
}

var sebastian = new persona('sebastian', 'calapsu', 1.73)
var catalina = new persona('catalina', 'meneses', 1.70)
var samanta = new desarrollador('samanta', 'meneses', 1.70)


sebastian.saludar()
catalina.saludar(responderSaludo)
samanta.saludar(responderSaludo)
