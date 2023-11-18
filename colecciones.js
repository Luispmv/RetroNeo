var dropdownCasual = document.getElementById("dropdown-casual")
var wrapperCasual = document.getElementById("wrapperCasual")
var etiquetah1 = document.getElementById("H1")

var dropwdownDeportivo = document.getElementById("dropdown-deportiva")
var wrapperDeportivo = document.getElementById("wrapperDeportivo")
var etiquetah12 = document.getElementById("H2")

var dropdownSneakers = document.getElementById("dropdown-sneakers")
var wrapperSneakers = document.getElementById("wrapperSneakers")
var etiquetah13 = document.getElementById("H3")

var dropdownAccesorios = document.getElementById("dropdown-accesorios")
var wrapperAccesorios = document.getElementById("wrapperAccesorios")
var etiquetah14 = document.getElementById("H4")

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
var botonMorado2 = document.getElementById("botonMorado2");
var botonRojo2 = document.getElementById("botonRojo2");
var botonVerde2 = document.getElementById("botonVerde2");
var botonAzul2 = document.getElementById("botonAzul2");

botonMorado2.addEventListener("click", function(){
    lizoshirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo2.addEventListener("click", function(){
    lizoshirt.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde2.addEventListener("click", function(){
    lizoshirt.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul2.addEventListener("click", function(){
    lizoshirt.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
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
var botonVerde4 = document.getElementById("botonVerde4");
var botonAzul4 = document.getElementById("botonAzul4");

botonMorado4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul4.addEventListener("click", function(){
    Sunshirt.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
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
var botonRojo6 = document.getElementById("botonRojo6");
var botonVerde6 = document.getElementById("botonVerde6");
var botonAzul6 = document.getElementById("botonAzul6");

botonMorado6.addEventListener("click", function(){
    jjeans.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo6.addEventListener("click", function(){
    jjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde6.addEventListener("click", function(){
    jjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul6.addEventListener("click", function(){
    jjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var tjeans = document.getElementById("tjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado7 = document.getElementById("botonMorado7");
var botonRojo7 = document.getElementById("botonRojo7");
var botonVerde7 = document.getElementById("botonVerde7");
var botonAzul7 = document.getElementById("botonAzul7");

botonMorado7.addEventListener("click", function(){
    tjeans.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo7.addEventListener("click", function(){
    tjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde7.addEventListener("click", function(){
    tjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul7.addEventListener("click", function(){
    tjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var pjeans = document.getElementById("pjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado8 = document.getElementById("botonMorado8");
var botonRojo8 = document.getElementById("botonRojo8");
var botonVerde8 = document.getElementById("botonVerde8");
var botonAzul8 = document.getElementById("botonAzul8");

botonMorado8.addEventListener("click", function(){
    pjeans.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo8.addEventListener("click", function(){
    pjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde8.addEventListener("click", function(){
    pjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul8.addEventListener("click", function(){
    pjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
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
    rjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde9.addEventListener("click", function(){
    rjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul9.addEventListener("click", function(){
    rjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


var bjeans = document.getElementById("bjeans"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado10 = document.getElementById("botonMorado10");
var botonRojo10 = document.getElementById("botonRojo10");
var botonVerde10 = document.getElementById("botonVerde10");
var botonAzul10 = document.getElementById("botonAzul10");

botonMorado10.addEventListener("click", function(){
    bjeans.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo10.addEventListener("click", function(){
    bjeans.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde10.addEventListener("click", function(){
    bjeans.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul10.addEventListener("click", function(){
    bjeans.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
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
var botonRojo22 = document.getElementById("botonRojo22");
var botonVerde22 = document.getElementById("botonVerde22");
var botonAzul22 = document.getElementById("botonAzul22");

botonMorado22.addEventListener("click", function(){
    medias.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo22.addEventListener("click", function(){
    medias.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde22.addEventListener("click", function(){
    medias.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul22.addEventListener("click", function(){
    medias.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Nike
var nike1 = document.getElementById("nike1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado23 = document.getElementById("botonMorado23");
var botonRojo23 = document.getElementById("botonRojo23");
var botonVerde23 = document.getElementById("botonVerde23");
var botonAzul23 = document.getElementById("botonAzul23");

botonMorado23.addEventListener("click", function(){
    nike1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});
botonRojo23.addEventListener("click", function(){
    nike1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});
botonVerde23.addEventListener("click", function(){
    nike1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});
botonAzul23.addEventListener("click", function(){
    nike1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var nike2 = document.getElementById("nike2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado24 = document.getElementById("botonMorado24");
var botonRojo24 = document.getElementById("botonRojo24");
var botonVerde24 = document.getElementById("botonVerde24");
var botonAzul24 = document.getElementById("botonAzul24");

botonMorado24.addEventListener("click", function(){
    nike2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo24.addEventListener("click", function(){
    nike2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde24.addEventListener("click", function(){
    nike2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul24.addEventListener("click", function(){
    nike2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Adidas
var adidas1 = document.getElementById("adidas1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado25 = document.getElementById("botonMorado25");
var botonRojo25 = document.getElementById("botonRojo25");
var botonVerde25 = document.getElementById("botonVerde25");
var botonAzul25 = document.getElementById("botonAzul25");

botonMorado25.addEventListener("click", function(){
    adidas1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo25.addEventListener("click", function(){
    adidas1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde25.addEventListener("click", function(){
    adidas1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul25.addEventListener("click", function(){
    adidas1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Puma
var puma1 = document.getElementById("pumas1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado26 = document.getElementById("botonMorado26");
var botonRojo26 = document.getElementById("botonRojo26");
var botonVerde26 = document.getElementById("botonVerde26");
var botonAzul26 = document.getElementById("botonAzul26");

botonMorado26.addEventListener("click", function(){
    puma1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo26.addEventListener("click", function(){
    puma1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde26.addEventListener("click", function(){
    puma1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul26.addEventListener("click", function(){
    puma1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});


//Under Armour
var underArmour = document.getElementById("ua1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado27 = document.getElementById("botonMorado27");
var botonRojo27 = document.getElementById("botonRojo27");
var botonVerde27 = document.getElementById("botonVerde27");
var botonAzul27 = document.getElementById("botonAzul27");

botonMorado27.addEventListener("click", function(){
    underArmour.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo27.addEventListener("click", function(){
    underArmour.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde27.addEventListener("click", function(){
    underArmour.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul27.addEventListener("click", function(){
    underArmour.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Fila
var fila1 = document.getElementById("fila1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado28 = document.getElementById("botonMorado28");
var botonRojo28 = document.getElementById("botonRojo28");
var botonVerde28 = document.getElementById("botonVerde28");
var botonAzul28 = document.getElementById("botonAzul28");

botonMorado28.addEventListener("click", function(){
    fila1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo28.addEventListener("click", function(){
    fila1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde28.addEventListener("click", function(){
    fila1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul28.addEventListener("click", function(){
    fila1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//Gorras
var gorra1 = document.getElementById("gorra1"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado29 = document.getElementById("botonMorado29");
var botonRojo29 = document.getElementById("botonRojo29");
var botonVerde29 = document.getElementById("botonVerde29");
var botonAzul29 = document.getElementById("botonAzul29");

botonMorado29.addEventListener("click", function(){
    gorra1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo29.addEventListener("click", function(){
    gorra1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde29.addEventListener("click", function(){
    gorra1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul29.addEventListener("click", function(){
    gorra1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var gorra2 = document.getElementById("gorra2"); // selecciona el primer elemento o ajusta según sea necesario
var botonMorado30 = document.getElementById("botonMorado30");
var botonRojo30 = document.getElementById("botonRojo30");
var botonVerde30 = document.getElementById("botonVerde30");
var botonAzul30 = document.getElementById("botonAzul30");

botonMorado30.addEventListener("click", function(){
    gorra2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo30.addEventListener("click", function(){
    gorra2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde30.addEventListener("click", function(){
    gorra2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul30.addEventListener("click", function(){
    gorra2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

//bolsas
var bolsa1 = document.getElementById("bolsa1");
var botonMorado31 = document.getElementById("botonMorado31");
var botonRojo31 = document.getElementById("botonRojo31");
var botonVerde31 = document.getElementById("botonVerde31");
var botonAzul31 = document.getElementById("botonAzul31");

botonMorado31.addEventListener("click", function(){
    bolsa1.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo31.addEventListener("click", function(){
    bolsa1.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde31.addEventListener("click", function(){
    bolsa1.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul31.addEventListener("click", function(){
    bolsa1.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
});

var bolsa2 = document.getElementById("bolsa2");
var botonMorado32 = document.getElementById("botonMorado32");
var botonRojo32 = document.getElementById("botonRojo32");
var botonVerde32 = document.getElementById("botonVerde32");
var botonAzul32 = document.getElementById("botonAzul32");

botonMorado32.addEventListener("click", function(){
    bolsa2.style.filter = "invert(30%) sepia(45%) saturate(500%) hue-rotate(300deg) brightness(60%) contrast(240%)";
});

botonRojo32.addEventListener("click", function(){
    bolsa2.style.filter = "invert(41%) sepia(0%) saturate(500%) hue-rotate(376deg) brightness(80%) contrast(200%)";
});

botonVerde32.addEventListener("click", function(){
    bolsa2.style.filter = "invert(4%) sepia(260%) saturate(500%) hue-rotate(91deg) brightness(80%) contrast(150%)";
});

botonAzul32.addEventListener("click", function(){
    bolsa2.style.filter = "invert(0%) sepia(80%) saturate(500%) hue-rotate(200deg) brightness(75%) contrast(130%)";
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
