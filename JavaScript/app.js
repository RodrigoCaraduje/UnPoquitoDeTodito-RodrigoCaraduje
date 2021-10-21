/* Desafio de objetos*/
/* Agregar imagen a clase producto */
class productos{
    constructor(nombre,precio,peso,stock/* img */){
        this.nombre = nombre,
        this.precio = precio,
        this.peso = peso,
        this.stock = stock
/*         this.img = img */
    }

    getNombre = () => {return this.nombre}
    getPrecio = () => {return this.precio}
    getPeso = () => {return this.peso}
    getStock = () => {return this.stock > 0 ? true : false}
/*     getImg = () => {return this.img} */
}

const chicito = new productos ("Julicroc",["10/12", "2022"], 300, 500, 0);
const palitosFritos = new productos ("Laurens",["11/12", "2023"], 250, 1000, 15);
const papasFritas = new productos ("Lays",["4/2", "2021"], 450, 800, 7);

const listadoProductos = [chicito, palitosFritos, papasFritas]

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

/* comprar = () => {
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

let stringHtml = ``;

/* Estructura For (Var inicializada; condicion; incremento o decremento)(recorrido array)*/

for(let e = 0; e < listadoProductos.length; e++){
    stringHtml += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${listadoProductos[e].nombre}</h5>
    <p class="card-text">${listadoProductos[e].precio}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
    `
}

document.getElementById("contentJs").innerHTML=stringHtml

{/* <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div> */}