const  API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'


//nos permite hacer un reques

const LukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`
const opst = {crossDomain: true}

const onResponse = function (persona){
    console.log(`hola yo soy ${persona.name}`)
}

$.get(LukeUrl, opst, onResponse)
