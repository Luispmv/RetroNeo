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

var imagenes = [
    "./img/CamisetaBasica2.svg",
    "./img/CamisetaBasica3.svg",
    "./img/CamisasMangaCorta1.svg",
    "./img/CamisasMangaCorta2.svg",
    "./img/CamisaDeportiva1.svg",
    "./img/CamisaDeportiva2.svg",
    "/img/Estampados1.svg",
    "/img/Estampados2.svg",
    "/img/Estampados3.svg",
    "/img/Jeans1.svg",
    "/img/Jeans2.svg",
    "/img/Joggers1.svg",
    "/img/formal1.svg",
    "/img/formal2.svg",
    "/img/formal3.svg",
    "/img/tennis1.svg",
    "./img/tennis2.svg"
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
        <a href="#">Ver Producto</a>
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

var camisetasBasicasFiltro = document.getElementById("camisetasBasicasFiltro")
camisetasBasicasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 1 && i <= 2) ? "flex" : "none";
        }
    }
});
camisetasBasicasFiltro.addEventListener("click",function(){
    cartaCero.style.display = "flex"
})

var camisetasMangaCortaFiltro = document.getElementById("camisasMangaCortaFiltro")
camisetasBasicasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 3 && i <= 4) ? "flex" : "none";
        }
    }
});
camisetasMangaCortaFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var camisasDeportivasFiltro = document.getElementById("camisasDeportivasFiltro")
camisasDeportivasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 5 && i <= 6) ? "flex" : "none";
        }
    }
});
camisasDeportivasFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var estampadosFiltro = document.getElementById("estampadosFiltro")
estampadosFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 7 && i <= 9) ? "flex" : "none";
        }
    }
});
estampadosFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})


var jeansFiltro = document.getElementById("jeansFiltro")
jeansFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 10 && i <= 11) ? "flex" : "none";
        }
    }
});
jeansFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var joggersFiltro = document.getElementById("joggersFiltro")
joggersFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 12) ? "flex" : "none";
        }
    }
});
joggersFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var FormalFiltro = document.getElementById("FormalFiltro")
FormalFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 13 && i <= 15) ? "flex" : "none";
        }
    }
});
FormalFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var tennisFiltro = document.getElementById("tennisFiltro")
tennisFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 16 && i <= 17) ? "flex" : "none";
        }
    }
});
tennisFiltro.addEventListener("click",function(){
    cartaCero.style.display = "none"
})

var subheader4 = document.getElementById("subheader4")
subheader4.addEventListener("click", function() {
    for (let i = 1; i <= 17; i++) {
        const tarjeta = document.getElementById("carta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 0 && i <= 17) ? "flex" : "none";
        }
    }
});