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


async function obtenerPersonajes (){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map (id => obternerPersonaje(id))
try{
    var personajes = await Promise.all(promesas)
    console.log(personajes)
}catch(idr){
    onError(id)
}

}

obtenerPersonajes()