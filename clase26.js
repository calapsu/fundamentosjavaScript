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
    .then(function (personaje) {
        console.log(`El personaje 1 es ${personaje.name}`)
    })

    .catch(onError)
