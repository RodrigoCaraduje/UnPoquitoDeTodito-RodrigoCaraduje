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
/* const iva = 21
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
console.log(procesoIva()); */


/* Desafio de objetos*/

class productos{
    constructor(nombre,precio,peso,stock){
        this.nombre = nombre,
        this.precio = precio,
        this.peso = peso,
        this.stock = stock
    }

    getNombre = () => {return this.nombre}
    getPrecio = () => {return this.precio}
    getPeso = () => {return this.peso}
    getStock = () => {return this.stock > 0 ? true : false}
}

const chicito = new productos ("Julicroc", 300, 500, 0);
const palitosFritos = new productos ("Laurens", 250, 1000, 15);
const papasFritas = new productos ("Lays", 450, 800, 7);

const defineProductos = (elemento) => {
    switch (elemento){
        case "Julicroc": 
                return chicito;
        case "Laurens":
                return palitosFritos;
        case "Lays":
                return papasFritas; 
    }
};

comprar = () => {
    let product = prompt("Ingrese su Producto")
    const eligeProducto = defineProductos (product);
    if(eligeProducto.getStock()){
        eligeProducto.stock = eligeProducto.stock - 1;
        console.log("Compraste un producto");
        console.log("Veo el envio del producto",eligeProducto);
    }
    else{
        console.log("No hay stock disponible");
    }
};
comprar();