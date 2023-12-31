var dropdownCasual = document.getElementById("dropdown-casual")
dropdownCasual.style.width = "1rem"

var wrapperCasual = document.getElementById("wrapperCasual")
var etiquetah1 = document.getElementById("H1")

var dropwdownDeportivo = document.getElementById("dropdown-deportiva")
dropwdownDeportivo.style.width = "1rem"
var wrapperDeportivo = document.getElementById("wrapperDeportivo")
var etiquetah12 = document.getElementById("H2")

var dropdownSneakers = document.getElementById("dropdown-sneakers")
dropdownSneakers.style.width = "1rem"
var wrapperSneakers = document.getElementById("wrapperSneakers")
var etiquetah13 = document.getElementById("H3")

var dropdownAccesorios = document.getElementById("dropdown-accesorios")
dropdownAccesorios.style.width = "1rem"
var wrapperAccesorios = document.getElementById("wrapperAccesorios")
var etiquetah14 = document.getElementById("H4")

if(window.matchMedia = "2560px"){
    dropdownCasual.style.width = "2rem"
    dropwdownDeportivo.style.width = "2rem"
    dropdownSneakers.style.width = "2rem"
    dropdownAccesorios.style.width = "2rem"
}

dropdownCasual.addEventListener("click", function(){
    wrapperCasual.style.display = "flex"
    wrapperDeportivo.style.display = "none"
    wrapperSneakers.style.display = "none"
    wrapperAccesorios.style.display = "none"
})
etiquetah1.addEventListener("click", function(){
    wrapperCasual.style.display = "none"
})
dropwdownDeportivo.addEventListener("click", function(){
    wrapperDeportivo.style.display = "flex"
    wrapperCasual.style.display = "none"
    wrapperSneakers.style.display = "none"
    wrapperAccesorios.style.display = "none"
})
etiquetah12.addEventListener("click", function(){
    wrapperDeportivo.style.display = "none"
})
dropdownSneakers.addEventListener("click",function(){
    wrapperSneakers.style.display = "flex"
    wrapperDeportivo.style.display = "none"
    wrapperCasual.style.display = "none"
    wrapperAccesorios.style.display = "none"
})
etiquetah13.addEventListener("click", function(){
    wrapperSneakers.style.display = "none"
})
dropdownAccesorios.addEventListener("click",function(){
    wrapperAccesorios.style.display = "flex"
    wrapperSneakers.style.display = "none"
    wrapperDeportivo.style.display = "none"
    wrapperCasual.style.display = "none"  
})
etiquetah14.addEventListener("click", function(){
    wrapperAccesorios.style.display = "none"
})


//Filtros
var camisetaFiltro = document.getElementById("CamisetaFiltro")
var JeansFiltro = document.getElementById("JeansFiltro")
var SudaderasFiltro = document.getElementById("SudaderasFiltro")
var ShortsFiltro = document.getElementById("ShortsFiltro")
var VestidoFiltro = document.getElementById("VestidoFiltro")

var CamisetaDeportiva = document.getElementById("CamisetaDeportiva")
var SujetadorDeportivo = document.getElementById("SujetadorDeportivo")
var Medias = document.getElementById("Medias")

var nikeFiltro = document.getElementById("nikeFiltro")
var AdidasFiltro = document.getElementById("AdidasFiltro")
var PumaFiltro = document.getElementById("PumaFiltro")
var UAFiltro = document.getElementById("UAFiltro")
var Fila = document.getElementById("Fila")

var GorraFiltro = document.getElementById("GorraFiltro")
var BolsosFiltro = document.getElementById("BolsosFiltro")
var MochilasFiltro = document.getElementById("MochilasFiltro")
var GafasFiltro = document.getElementById("GafasFiltro")

var h1todo = document.getElementById("h1todo")

var tarjetas = {};
for (var i = 1; i <= 35; i++) {
    tarjetas["tarjeta" + i] = document.getElementById("Tarjeta" + i);
}

// camisetaFiltro.addEventListener("click", function(){
//     tarjeta1.style.display = "flex" 
//     tarjeta2.style.display = "flex"
//     tarjeta3.style.display = "flex" 
//     tarjeta4.style.display = "flex" 
//     tarjeta5.style.display = "flex"
//     tarjeta6.style.display = "none"
//     tarjeta7.style.display = "none"
//     tarjeta8.style.display = "none"
//     tarjeta9.style.display = "none"
//     tarjeta10.style.display = "none"
//     tarjeta10.style.display = "none"
//     tarjeta11.style.display = "none"
//     tarjeta12.style.display = "none"
//     tarjeta13.style.display = "none"
//     tarjeta14.style.display = "none"
//     tarjeta15.style.display = "none"
//     tarjeta16.style.display = "none"
//     tarjeta17.style.display = "none"
//     tarjeta18.style.display = "none"
//     tarjeta19.style.display = "none"
//     tarjeta20.style.display = "none"
//     tarjeta21.style.display = "none"
//     tarjeta22.style.display = "none"
//     tarjeta23.style.display = "none"
//     tarjeta24.style.display = "none"
//     tarjeta25.style.display = "none"
//     tarjeta26.style.display = "none"
//     tarjeta27.style.display = "none"
//     tarjeta28.style.display = "none"
//     tarjeta29.style.display = "none"
//     tarjeta30.style.display = "none"
//     tarjeta31.style.display = "none"
//     tarjeta32.style.display = "none"
//     tarjeta33.style.display = "none"
//     tarjeta34.style.display = "none"
//     tarjeta35.style.display = "none"
// })

camisetaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 1 && i <= 5) ? "flex" : "none";
        }
    }
});


JeansFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 6 && i <= 9) ? "flex" : "none";
        }
    }
});


SudaderasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 11 && i <= 15) ? "flex" : "none";
        }
    }
});


ShortsFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 16) ? "flex" : "none";
        }
    }
});


VestidoFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 17 && i <= 19) ? "flex" : "none";
        }
    }
});


CamisetaDeportiva.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 20) ? "flex" : "none";
        }
    }
});

SujetadorDeportivo.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 21) ? "flex" : "none";
        }
    }
});

Medias.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 22) ? "flex" : "none";
        }
    }
});

nikeFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 23 && i <= 24) ? "flex" : "none";
        }
    }
});

AdidasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 25 && i <= 26) ? "flex" : "none";
        }
    }
});

PumaFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 26) ? "flex" : "none";
        }
    }
});

UAFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 27) ? "flex" : "none";
        }
    }
});

Fila.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i === 28) ? "flex" : "none";
        }
    }
});

GorraFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 29 && i <= 30) ? "flex" : "none";
        }
    }
});

BolsosFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 31 && i <= 32) ? "flex" : "none";
        }
    }
});
MochilasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i >= 33 && i <= 34) ? "flex" : "none";
        }
    }
});
GafasFiltro.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = (i===35) ? "flex" : "none";
        }
    }
});

h1todo.addEventListener("mouseup", function(){
    h1todo.style.cursor = "pointer"
})
h1todo.addEventListener("click", function() {
    for (let i = 1; i <= 35; i++) {
        const tarjeta = document.getElementById("Tarjeta" + i);
        if (tarjeta) {
            tarjeta.style.display = "flex"
        }
    }
});
//Camisas
var sparkshirt = document.getElementById("sparkshirt"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado = document.getElementById("botonMorado");
var botonRojo = document.getElementById("botonRojo");
var botonVerde = document.getElementById("botonVerde");
var botonAzul = document.getElementById("botonAzul");

botonMorado.addEventListener("click", function(){
    sparkshirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo.addEventListener("click", function(){
    sparkshirt.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde.addEventListener("click", function(){
    sparkshirt.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul.addEventListener("click", function(){
    sparkshirt.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var lizoshirt = document.getElementById("lizoShirt"); // selecciona el primer elemento o ajusta según sea necesario
var botonNegro2 = document.getElementById("botonNegro2");

botonNegro2.addEventListener("click", function(){
    lizoshirt.style.filter = "none";
});



var Sushirt = document.getElementById("sushirt"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado3 = document.getElementById("botonMorado3");
var botonRojo3 = document.getElementById("botonRojo3");
var botonVerde3 = document.getElementById("botonVerde3");
var botonAzul3 = document.getElementById("botonAzul3");

botonMorado3.addEventListener("click", function(){
    Sushirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo3.addEventListener("click", function(){
    Sushirt.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde3.addEventListener("click", function(){
    Sushirt.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul3.addEventListener("click", function(){
    Sushirt.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var Sunshirt = document.getElementById("sunshirt"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado4 = document.getElementById("botonMorado4");
var botonRojo4 = document.getElementById("botonRojo4");
var botonGris4 = document.getElementById("botonGris4");

botonMorado4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(0%) sepia(126%) saturate(608%) hue-rotate(260deg) brightness(75%) contrast(130%)";
});

botonRojo4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonGris4.addEventListener("click", function(){
    Sunshirt.style.filter = "none";
});


var Tshirt = document.getElementById("T-shirt"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado5 = document.getElementById("botonMorado5");
var botonRojo5 = document.getElementById("botonRojo5");
var botonVerde5 = document.getElementById("botonVerde5");
var botonAzul5 = document.getElementById("botonAzul5");

botonMorado5.addEventListener("click", function(){
    Tshirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo5.addEventListener("click", function(){
    Tshirt.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde5.addEventListener("click", function(){
    Tshirt.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul5.addEventListener("click", function(){
    Tshirt.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Jeans

var jjeans = document.getElementById("jjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado6 = document.getElementById("botonMorado6");


botonMorado6.addEventListener("click", function(){
    jjeans.style.filter = "none";
});

var tjeans = document.getElementById("tjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado7 = document.getElementById("botonMorado7");

botonMorado7.addEventListener("click", function(){
    tjeans.style.filter = "none";
});

var pjeans = document.getElementById("pjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado8 = document.getElementById("botonMorado8");


botonMorado8.addEventListener("click", function(){
    pjeans.style.filter = "none"
});


var rjeans = document.getElementById("rjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado9 = document.getElementById("botonMorado9");
var botonRojo9 = document.getElementById("botonRojo9");
var botonVerde9 = document.getElementById("botonVerde9");
var botonAzul9 = document.getElementById("botonAzul9");

botonMorado9.addEventListener("click", function(){
    rjeans.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo9.addEventListener("click", function(){
    rjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(400deg) brightness(75%) contrast(270%)";
});

botonVerde9.addEventListener("click", function(){
    rjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul9.addEventListener("click", function(){
    rjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var bjeans = document.getElementById("bjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado10 = document.getElementById("botonMorado10");

botonMorado10.addEventListener("click", function(){
    bjeans.style.filter = "none";
});



var sudadera1 = document.getElementById("sudadera1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado11 = document.getElementById("botonMorado11");
var botonRojo11 = document.getElementById("botonRojo11");
var botonVerde11 = document.getElementById("botonVerde11");
var botonAzul11 = document.getElementById("botonAzul11");

botonMorado11.addEventListener("click", function(){
    sudadera1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo11.addEventListener("click", function(){
    sudadera1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde11.addEventListener("click", function(){
    sudadera1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul11.addEventListener("click", function(){
    sudadera1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var sudadera2 = document.getElementById("sudadera2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado12 = document.getElementById("botonMorado12");
var botonRojo12 = document.getElementById("botonRojo12");
var botonVerde12 = document.getElementById("botonVerde12");
var botonAzul12 = document.getElementById("botonAzul12");

botonMorado12.addEventListener("click", function(){
    sudadera2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo12.addEventListener("click", function(){
    sudadera2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde12.addEventListener("click", function(){
    sudadera2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul12.addEventListener("click", function(){
    sudadera2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var sudadera3 = document.getElementById("sudadera3"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado13 = document.getElementById("botonMorado13");
var botonRojo13 = document.getElementById("botonRojo13");
var botonVerde13 = document.getElementById("botonVerde13");
var botonAzul13 = document.getElementById("botonAzul13");

botonMorado13.addEventListener("click", function(){
    sudadera3.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo13.addEventListener("click", function(){
    sudadera3.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde13.addEventListener("click", function(){
    sudadera3.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul13.addEventListener("click", function(){
    sudadera3.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var sudadera4 = document.getElementById("sudadera4"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado14 = document.getElementById("botonMorado14");
var botonRojo14 = document.getElementById("botonRojo14");
var botonVerde14 = document.getElementById("botonVerde14");
var botonAzul14 = document.getElementById("botonAzul14");

botonMorado14.addEventListener("click", function(){
    sudadera4.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo14.addEventListener("click", function(){
    sudadera4.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde14.addEventListener("click", function(){
    sudadera4.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul14.addEventListener("click", function(){
    sudadera4.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var sudadera5 = document.getElementById("sudadera5"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado15 = document.getElementById("botonMorado15");
var botonRojo15 = document.getElementById("botonRojo15");
var botonVerde15 = document.getElementById("botonVerde15");
var botonAzul15 = document.getElementById("botonAzul15");

botonMorado15.addEventListener("click", function(){
    sudadera5.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo15.addEventListener("click", function(){
    sudadera5.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde15.addEventListener("click", function(){
    sudadera5.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul15.addEventListener("click", function(){
    sudadera5.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


//Shorts
var short1 = document.getElementById("short1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado16 = document.getElementById("botonMorado16");
var botonRojo16 = document.getElementById("botonRojo16");
var botonVerde16 = document.getElementById("botonVerde16");
var botonAzul16 = document.getElementById("botonAzul16");

botonMorado16.addEventListener("click", function(){
    short1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo16.addEventListener("click", function(){
    short1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde16.addEventListener("click", function(){
    short1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul16.addEventListener("click", function(){
    short1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Vestidos
var vestido1 = document.getElementById("dress1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado17 = document.getElementById("botonMorado17");
var botonRojo17 = document.getElementById("botonRojo17");
var botonVerde17 = document.getElementById("botonVerde17");
var botonAzul17 = document.getElementById("botonAzul17");

botonMorado17.addEventListener("click", function(){
    vestido1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo17.addEventListener("click", function(){
    vestido1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(430deg) brightness(80%) contrast(200%)";
});

botonVerde17.addEventListener("click", function(){
    vestido1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul17.addEventListener("click", function(){
    vestido1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var vestido2 = document.getElementById("dress2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado18 = document.getElementById("botonMorado18");
var botonRojo18 = document.getElementById("botonRojo18");
var botonVerde18 = document.getElementById("botonVerde18");
var botonAzul18 = document.getElementById("botonAzul18");

botonMorado18.addEventListener("click", function(){
    vestido2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo18.addEventListener("click", function(){
    vestido2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(430deg) brightness(80%) contrast(200%)";
});

botonVerde18.addEventListener("click", function(){
    vestido2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul18.addEventListener("click", function(){
    vestido2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var vestido3 = document.getElementById("dress3"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado19 = document.getElementById("botonMorado19");
var botonRojo19 = document.getElementById("botonRojo19");
var botonVerde19 = document.getElementById("botonVerde19");
var botonAzul19 = document.getElementById("botonAzul19");

botonMorado19.addEventListener("click", function(){
    vestido3.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo19.addEventListener("click", function(){
    vestido3.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde19.addEventListener("click", function(){
    vestido3.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul19.addEventListener("click", function(){
    vestido3.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


//Camisas deportivas
var cmd = document.getElementById("cmd"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado20 = document.getElementById("botonMorado20");
var botonRojo20 = document.getElementById("botonRojo20");
var botonVerde20 = document.getElementById("botonVerde20");
var botonAzul20 = document.getElementById("botonAzul20");

botonMorado20.addEventListener("click", function(){
    cmd.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo20.addEventListener("click", function(){
    cmd.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde20.addEventListener("click", function(){
    cmd.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul20.addEventListener("click", function(){
    cmd.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Sujetador deportivo
var sujetador = document.getElementById("sujetador"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado21 = document.getElementById("botonMorado21");
var botonRojo21 = document.getElementById("botonRojo21");
var botonVerde21 = document.getElementById("botonVerde21");
var botonAzul21 = document.getElementById("botonAzul21");

botonMorado21.addEventListener("click", function(){
    sujetador.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo21.addEventListener("click", function(){
    sujetador.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde21.addEventListener("click", function(){
    sujetador.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul21.addEventListener("click", function(){
    sujetador.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Medias
var medias = document.getElementById("medias"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado22 = document.getElementById("botonMorado22");

botonMorado22.addEventListener("click", function(){
    medias.style.filter = "none";
});

//Nike
var nike1 = document.getElementById("nike1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado23 = document.getElementById("botonMorado23");
var botonRojo23 = document.getElementById("botonRojo23");
var botonVerde23 = document.getElementById("botonVerde23");
var botonAzul23 = document.getElementById("botonAzul23");

botonMorado23.addEventListener("click", function(){
    nike1.style.filter = "none";
});


var nike2 = document.getElementById("nike2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado24 = document.getElementById("botonMorado24");


botonMorado24.addEventListener("click", function(){
    nike2.style.filter = "none";
});


//Adidas
var adidas1 = document.getElementById("adidas1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado25 = document.getElementById("botonMorado25");


botonMorado25.addEventListener("click", function(){
    adidas1.style.filter = "none";
});


//Puma
var puma1 = document.getElementById("pumas1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado26 = document.getElementById("botonMorado26");

botonMorado26.addEventListener("click", function(){
    puma1.style.filter = "none";
});


//Under Armour
var underArmour = document.getElementById("ua1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado27 = document.getElementById("botonMorado27");

botonMorado27.addEventListener("click", function(){
    underArmour.style.filter = "none";
});

//Fila
var fila1 = document.getElementById("fila1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado28 = document.getElementById("botonMorado28");

botonMorado28.addEventListener("click", function(){
    fila1.style.filter = "none";
});
//Gorras
var gorra1 = document.getElementById("gorra1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado29 = document.getElementById("botonMorado29");

botonMorado29.addEventListener("click", function(){
    gorra1.style.filter = "none";
});


var gorra2 = document.getElementById("gorra2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado30 = document.getElementById("botonMorado30");

botonMorado30.addEventListener("click", function(){
    gorra2.style.filter = "none";
});

//bolsas
var bolsa1 = document.getElementById("bolsa1");
var botonMorado31 = document.getElementById("botonMorado31");
var botonRojo31 = document.getElementById("botonRojo31");
var botonVerde31 = document.getElementById("botonVerde31");
var botonAzul31 = document.getElementById("botonAzul31");

botonMorado31.addEventListener("click", function(){
    bolsa1.style.filter = "none";
});


var bolsa2 = document.getElementById("bolsa2");
var botonMorado32 = document.getElementById("botonMorado32");

botonMorado32.addEventListener("click", function(){
    bolsa2.style.filter = "none";
});


//Mochila

var Mochila1 = document.getElementById("Mochila1");
var botonMorado33 = document.getElementById("botonMorado33");
var botonRojo33 = document.getElementById("botonRojo33");
var botonVerde33 = document.getElementById("botonVerde33");
var botonAzul33 = document.getElementById("botonAzul33");

botonMorado33.addEventListener("click", function(){
    Mochila1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo33.addEventListener("click", function(){
    Mochila1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde33.addEventListener("click", function(){
    Mochila1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul33.addEventListener("click", function(){
    Mochila1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var Mochila2 = document.getElementById("Mochila2");
var botonMorado34 = document.getElementById("botonMorado34");
var botonRojo34 = document.getElementById("botonRojo34");
var botonVerde34 = document.getElementById("botonVerde34");
var botonAzul34 = document.getElementById("botonAzul34");

botonMorado34.addEventListener("click", function(){
    Mochila2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo34.addEventListener("click", function(){
    Mochila2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(430deg) brightness(75%) contrast(200%)";
});

botonVerde34.addEventListener("click", function(){
    Mochila2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul34.addEventListener("click", function(){
    Mochila2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});
