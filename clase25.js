const  API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'


//nos permite hacer un reques

const opst = {crossDomain: true}




function obternerPersonaje (id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
   
    $.get(url, opst, function (persona) {
        console.log(`hola yo soy ${persona.name}`)

        if (callback){
            callback()
        }
    })

}

obternerPersonaje(1, function () {
    obternerPersonaje(2, function () {
        obternerPersonaje(3, function () {
            obternerPersonaje(4, function () {
                obternerPersonaje(5, function (){
                    obternerPersonaje(6,function(){
                        
                    })
                })
            })
        })
    })
}

)