const  API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'


//nos permite hacer un reques

const opst = {crossDomain: true}

const onResponse = function (persona){
    console.log(`hola yo soy ${persona.name}`)
}

function obternerPersonaje (id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opst, onResponse)

}

obternerPersonaje(3)