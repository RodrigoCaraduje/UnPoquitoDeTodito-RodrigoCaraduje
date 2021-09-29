/* alert ("Hola mundo, esto es js")
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

let contraseña = prompt("Ingrese su contraseña");

while(contraseña != "1234" ){
    alert("El usuario ingresó "+ contraseña);
    
    contraseña = prompt("Reintentar contraseña");
} */




/* Simulador interactivo Tp + Funciones relacionadasTp*/
const iva = 21
const papasFritas = 350;
const palitosFritos = 260;
const maniSaborizado = 527;
const aritosFrutales = 1349;

const compraIva = (productoElegido) => {
    return productoElegido * iva / 100;
};

const defineProducto = (producto) => {
    switch (producto){
        case "papasF":
                return papasFritas;
        case "palitosF":
                return palitosFritos;
        case "maniS":
                return maniSaborizado;
        case "aritosF":
                return aritosFrutales;
    }
};

const procesoIva = () =>{
    const dato = prompt("Ingrese su producto");
    let productoElegido = defineProducto(dato);
    return productoElegido + compraIva(productoElegido)
}
console.log(procesoIva());