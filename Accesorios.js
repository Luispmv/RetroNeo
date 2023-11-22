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

// var dropdown4 = document.getElementById("dropdown4");
// var sbf4 = document.getElementById("sbf4"); 
var subheader4 = document.getElementById("subheader4"); 

dropdown4.addEventListener("click", function(){
    sbf4.style.display = "flex";
});

subheader4.addEventListener("click", function(){
    sbf4.style.display = "none";
});

//Creacion de nuestras cartas 
var imagenes = [
    "./img/BufandaClasica2.svg",
    "./img/BufandaLana1.svg",
    "./img/bolso1.svg",
    "./img/Bolsa2.svg",
    "./img/bolsa3.svg",
    "./img/Mochila1.svg",
    "./img/mochila2.png",
    "./img/Mochila3.svg",
    "./img/Guantes1.svg",
    "./img/Guantes2.svg",
    "./img/Guantes3.png",
    "./img/GuanteLana1.png",
    "./img/GuanteLana2.png",
    "./img/GuanteLana3.png",
    "./img/RelojVestir1.png",
    "./img/RelojVestir2.png",
    "./img/RelojVestir3.png"
];




var nombresProductos = [
    "Bufanda Az",
    "Lana Azul",
    "Cafe cuadrado",
    "Bolso Negro",
    "Bolso Azul C",
    "JeanSport",
    "SportPack",
    "BBPack",
    "Cafes CG",
    "Cuero Negro",
    "Cuero Blanco",
    "Cobalto Gloves",
    "Neblina Gloves",
    "Rubi Gloves",
    "Casio CC2",
    "Casio CC7",
    "Casio 345"
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
    for (var i = 0; i < 17; i++) {
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
    for (var i = 1; i <= 17; i++) {
        tarjetas["carta" + i] = document.getElementById("carta" + i);
    }
});

var bufandaClasicaFiltro = document.getElementById("bufandaClasicaFiltro")
bufandaClasicaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 1) ? "flex" : "none";
        }
    }
});
bufandaClasicaFiltro.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})

var bufandaLanaFiltro = document.getElementById("bufandaLanaFiltro")
bufandaLanaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 2) ? "flex" : "none";
        }
    }
});
bufandaLanaFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var bolsoManoFiltro = document.getElementById("bolsoManoFiltro")
bolsoManoFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 3 && i <= 5) ? "flex" : "none";
        }
    }
});
bolsoManoFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var mochilaFiltro = document.getElementById("mochilaFiltro")
mochilaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 6 && i <= 8) ? "flex" : "none";
        }
    }
});
mochilaFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var guanteFiltro = document.getElementById("guanteFiltro")
guanteFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 9 && i <= 11) ? "flex" : "none";
        }
    }
});
guanteFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var guanteLanaFiltro = document.getElementById("guanteLanaFiltro")
guanteLanaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 12 && i <= 14) ? "flex" : "none";
        }
    }
});
guanteLanaFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var RelojVestirFiltro = document.getElementById("relojVestirFiltro")
RelojVestirFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 15 && i <= 17) ? "flex" : "none";
        }
    }
});
RelojVestirFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var subheader4 = document.getElementById("subheader5")
subheader4.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 17) ? "flex" : "none";
        }
    }
});
subheader4.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})