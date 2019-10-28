const  API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'


//nos permite hacer un reques

const opst = {crossDomain: true}




function obternerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
   
    $
    .get(url, opst, callback)
    .fail(function () {
        console.log(`sucedio un error. y no pudimos encontrar el personaje ${id}`)
    })

}



obternerPersonaje(1, function (personaje) {
    console.log(`hola yo soy ${personaje.name}`)

    obternerPersonaje(2, function (personaje) {
        console.log(`hola yo soy ${personaje.name}`)

        obternerPersonaje(3, function (personaje) {
            console.log(`hola yo soy ${personaje.name}`)

            obternerPersonaje(4, function (personaje) {
                console.log(`hola yo soy ${personaje.name}`)

                obternerPersonaje(5, function (personaje){
                    console.log(`hola yo soy ${personaje.name}`)

                    obternerPersonaje(6, function(personaje){
                        console.log(`hola yo soy ${personaje.name}`)
                        
                    })
                })
            })
        })
    })
}

)