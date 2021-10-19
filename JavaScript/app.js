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

const chicito = new productos ("Julicroc",["10/12", "2022"], 300, 500, 0);
const palitosFritos = new productos ("Laurens",["11/12", "2023"], 250, 1000, 15);
const papasFritas = new productos ("Lays",["4/2", "2021"], 450, 800, 7);

const listadoProductos = []

listadoProductos.push(chicito)
listadoProductos.push(palitosFritos)
listadoProductos.push(papasFritas)
listadoProductos.sort

/* const defineProductos = (elemento) => {
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
comprar(); */

