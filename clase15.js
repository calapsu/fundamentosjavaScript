var contador = 0

const llover = () => Math.random() < 0.25

do {
    contador++
}while(!llover())
if (contador <=1){
console.log(`sali a ver si llovia ${contador} vez`)
}else{
    console.log(`sali a ver si llovia ${contador} veces`)
}




