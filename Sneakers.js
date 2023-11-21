//Funcionamiento dropdowns
var dropdown1 = document.getElementById("dropdown1")
var sbf1 = document.getElementById("sbf1")
var subheader1 = document.getElementById("subheader1")

dropdown1.addEventListener("click", function(){
    sbf1.style.display = "flex"
})
subheader1.addEventListener("click", function(){
    sbf1.style.display = "none"
})

var dropdown2 = document.getElementById("dropdown2")
var sbf2 = document.getElementById("sbf2")
var subheader2 = document.getElementById("subheader2")

dropdown2.addEventListener("click", function(){
    sbf2.style.display = "flex"
})
subheader2.addEventListener("click", function(){
    sbf2.style.display = "none"
})


var dropdown3 = document.getElementById("dropdown3");
var sbf3 = document.getElementById("sbf3"); 
var subheader3 = document.getElementById("subheader3"); 

dropdown3.addEventListener("click", function(){
    sbf3.style.display = "flex";
});

subheader3.addEventListener("click", function(){
    sbf3.style.display = "none";
});

//Creacion de nuestras cartas 
var imagenes = [
    "./img/NikeCasual2.png",
    "./img/NikeCasual3.png",
    "./img/NikeCasual4.png",
    "./img/NikeCasual5.png",
    "./img/NikeCasual6.png",
    "./img/nikeRunning1.png",
    "./img/nikeRunning2.png",
    "./img/nikeRunning3.png",
    "./img/nikeRunning4.png",
    "./img/nikeRunning5.png",
    "./img/nikeRunning6.png",
    "./img/AdidasCasual1.png",
    "./img/AdidasCasual2.png",
    "./img/AdidasCasual3.png",
    "./img/AdidasCasual4.png",
    "./img/AdidasCasual5.png",
    "./img/AdidasCasual6.png",
    "./img/AdidasRunning1.png",
    "./img/AdidasRunning2.png",
    "./img/AdidasRunning3.png",
    "./img/AdidasRunning4.png",
    "./img/AdidasRunning5.png",
    "./img/AdidasRunning6.png",
    "./img/vans1.png",
    "./img/vans2.png",
    "./img/vans3.png",
    "./img/vans4.png",
    "./img/vans5.png",
    "./img/vans6.png"
];




var nombresProductos = [
    "Producto 2",
    "Producto 3",
    "Producto 4",
    "Producto 5",
    "Producto 6",
    "Producto 7",
    "Producto 8",
    "Producto 9",
    "Producto 10",
    "Producto 11",
    "Producto 12",
    "Producto 13",
    "Producto 14",
    "Producto 15",
    "Producto 16",
    "Producto 17",
    "Producto 18",
    "Producto 19",
    "Producto 20",
    "Producto 21",
    "Producto 22",
    "Producto 23",
    "Producto 24",
    "Producto 25",
    "Producto 26",
    "Producto 27",
];
var precios = [
    "$100",
    "$200",
    "$300",
    "$400",
    "$500",
    "$600",
    "$700",
    "$800",
    "$900",
    "$1000",
    "$1100",
    "$1200",
    "$1300",
    "$1400",
    "$1500",
    "$1600",
    "$1700"
];

var anchos = [250];
var altos = [250];

function crearCarta(imagenURL, nombreProducto, ancho, alto, precio, i) {
    var contenedor = document.getElementById("contenedor");

    var idUnico = "carta" + (i + 1);


    var carta = document.createElement("div");
    carta.classList.add("card");

    carta.id = idUnico;

    carta.innerHTML = `
        <img src="${imagenURL}" alt="" class="imageCard" style="width:${ancho}px; height:${alto}px">
        <div class="productoDetalles">
            <div class="productoHeaders">
                <h1>${nombreProducto}</h1>
                <div class="etiquetaProducto">New</div>
            </div>
            <div class="productoOptions">
                <img src="./img/VectorHeart.svg" alt="">
                <p>${precio}</p>
            </div>
        </div>
        <a href="./producto.html">Ver Producto</a>
    `;

    contenedor.appendChild(carta);
}

document.addEventListener("DOMContentLoaded", function () {
    for (var i = 0; i < 30; i++) {
        var imagenURL = imagenes[i % imagenes.length];
        var nombreProducto = nombresProductos[i % nombresProductos.length];
        var ancho = anchos[i % anchos.length];
        var alto = altos[i % altos.length];
        var precio = precios[i % precios.length];
        crearCarta(imagenURL, nombreProducto, ancho, alto, precio, i);
    }
});



var cartaCero = document.getElementById("carta0")


var tarjetas = {};

document.addEventListener("DOMContentLoaded", function () {
    for (var i = 1; i <= 30; i++) {
        tarjetas["carta" + i] = document.getElementById("carta" + i);
    }
});

var casualNikeFiltro = document.getElementById("casualNikeFiltro")
casualNikeFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 5) ? "flex" : "none";
        }
    }
});
casualNikeFiltro.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})

var casualNikeRunningFiltro = document.getElementById("casualNikeRunningFiltro")
casualNikeRunningFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 6 && i <= 12) ? "flex" : "none";
        }
    }
});
casualNikeRunningFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var casualAdidasFiltro = document.getElementById("casualAdidasFiltro")
casualAdidasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 13 && i <= 17) ? "flex" : "none";
        }
    }
});
casualAdidasFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var casualRunningFiltro = document.getElementById("casualRunningFiltro")
casualRunningFiltro .addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 18 && i <= 23) ? "flex" : "none";
        }
    }
});
casualRunningFiltro .addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var casualVansFiltro = document.getElementById("casualVansFiltro")
casualVansFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 24 && i <= 30) ? "flex" : "none";
        }
    }
});
casualVansFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var subheader4 = document.getElementById("subheader4")
subheader4.addEventListener("click", function() {
    for (let i = 1; i <= 30; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 30) ? "flex" : "none";
        }
    }
});
subheader4.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})