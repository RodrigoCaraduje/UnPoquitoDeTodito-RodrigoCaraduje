alert ("Hola mundo, esto es js")
let nombre = prompt ("Ingrese su nombre")
let apellido = prompt ("Ingrese su apellido")
let edad = Number(prompt("Ingrese su edad"))
let palabra
let dinero = Number(prompt("ingrese su dinero"))
let sexo

if (dinero === 160){
    alert ("Felicidades, te podes comprar 1 dolar xd")
}else if (dinero > 160){
    alert ("Wow, con esa cantidad hasta te compras la pampa")
}else {
    alert ("Te podes hacer un guisito al menos")
}

if (sexo === "H"){
    palabra = "Bienvenido"
}else if (sexo === "M"){
    palabra = "Bienvenida"
}else {
    palabra = "Quien es ese pokemonnnn"
}

console.log (`$(palabra) $(nombre) $(apellido) tu edad es $(edad)`)