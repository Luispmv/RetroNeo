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
    "./img/CamisaDeportiva2.svg",
    "./img/Camisa Running3.svg",
    "./img/PantalonesRunning1.svg",
    "./img/PantalonesRunning2.svg",
    "./img/PantalonesRunning3.svg",
    "./img/CalcetinesDeprtivos1.svg",
    "./img/CalcetinesDeprtivos2.svg",
    "./img/CalcetinesDeprtivos3.svg",
    "./img/sudadera3.svg",
    "./img/sudadera2.svg",
    "./img/sudadera4.svg",
    "./img/CamisetaBasica1.svg",
    "./img/CamisetaBasica2.svg",
    "./img/CamisetaBasica3.svg",
    "./img/short1.svg",
    "./img/short2.svg",
    "./img/short3.svg",
    "./img/leggins1.svg",
    "./img/leggins2.svg",
    "./img/leggins3.svg",
    "./img/CamisetaFutbol1.svg",
    "./img/CamisetaFutbol2.svg",
    "./img/CamisetaFutbol3.svg",
    "./img/ShortsFutbol1.svg",
    "./img/ShortsFutbol2.svg",
    "./img/ShortsFutbol13.svg",
    "./img/CamisetaBaloncesto1.svg",
    "./img/CamisetaBaloncesto2.svg",
    "./img/CamisetaBaloncesto3.svg"
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
    "Producto 29",
    "Prodcuto 30",
    "Producto 31"
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
    for (var i = 0; i < 29; i++) {
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
    for (var i = 1; i <= 29; i++) {
        tarjetas["carta" + i] = document.getElementById("carta" + i);
    }
});

var camisetasRunningFiltro = document.getElementById("camisetasRunningFiltro")
camisetasRunningFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 2) ? "flex" : "none";
        }
    }
});
camisetasRunningFiltro.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})

var pantalonesRunningFiltro = document.getElementById("pantalonesRunningFiltro")
pantalonesRunningFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 3 && i <= 5) ? "flex" : "none";
        }
    }
});
pantalonesRunningFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var calcetinesDeportivosFiltro = document.getElementById("calcetinesDeportivosFiltro")
calcetinesDeportivosFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 6 && i <= 8) ? "flex" : "none";
        }
    }
});
calcetinesDeportivosFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var sudaderasFiltro = document.getElementById("sudaderasFiltro")
sudaderasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 9 && i <= 11) ? "flex" : "none";
        }
    }
});
sudaderasFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var camisetasSinMangasFiltro = document.getElementById("camisetasSinMangasFiltro")
camisetasSinMangasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 12 && i <= 14) ? "flex" : "none";
        }
    }
});
camisetasSinMangasFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var shortsFiltro = document.getElementById("shortsFiltro")
shortsFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 15 && i<= 17) ? "flex" : "none";
        }
    }
});
shortsFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var leggingsFiltro = document.getElementById("leggingsFiltro")
leggingsFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 18 && i <= 20) ? "flex" : "none";
        }
    }
});
leggingsFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var camisetasFutbolFiltro = document.getElementById("camisetasFutbolFiltro")
camisetasFutbolFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 21 && i <= 23) ? "flex" : "none";
        }
    }
});
camisetasFutbolFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var shortsFutbolFiltro = document.getElementById("shortsFutbolFiltro")
shortsFutbolFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 24 && i <= 26) ? "flex" : "none";
        }
    }
});
shortsFutbolFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var camisetasBaloncestoFiltro = document.getElementById("camisetasBaloncestoFiltro")
camisetasBaloncestoFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 27 && i <= 29) ? "flex" : "none";
        }
    }
});
camisetasBaloncestoFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var subheader4 = document.getElementById("subheader4")
subheader4.addEventListener("click", function() {
    for (let i = 1; i <= 29; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 29) ? "flex" : "none";
        }
    }
});