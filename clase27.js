const  API_URL = 'https://swapi.co/api/'
const  PEOPLE_URL = 'people/:id'


//nos permite hacer un reques

const opst = {crossDomain: true}




function obternerPersonaje (id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, opst, function (data) {
            resolve(data)
        })
        .fail(() => reject(id))
            
    })    
}


function onError (id){
    console.log (`ocurrio un error al obtener el personaje ${id}`)
}

obternerPersonaje(1)
    .then( personaje1 => {
        console.log(`El personaje 1 es ${personaje1.name}`)
        return obternerPersonaje(2)
    })

    .then( personaje2 => {
        console.log(`El personaje 2 es ${personaje2.name}`)
        return obternerPersonaje(3)
    })

    .then( personaje3 => {
        console.log(`El personaje 3 es ${personaje3.name}`)
        return obternerPersonaje(4)
    })

    .then( personaje4 => {
        console.log(`El personaje 4 es ${personaje4.name}`)
        return obternerPersonaje(5)
    })

    .then( personaje5 => {
        console.log(`El personaje 5 es ${personaje5.name}`)
        return obternerPersonaje(6)
    })

    .then( personaje6 => {
        console.log(`El personaje 6 es ${personaje6.name}`)
        return obternerPersonaje(7)
    })

    .then( personaje7 => {
        console.log(`El personaje 7 es ${personaje7.name}`)
    })


    .catch(onError)
