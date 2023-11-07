var menu = document.getElementById("menu-anchor");
var menu_lateral = document.getElementById("pop-up-nv");
var icono_cerrar = document.getElementById("close-icon-id");

menu.addEventListener("click", function() {
    menu_lateral.style.display = "block";
});

icono_cerrar.addEventListener("click", function() {
    menu_lateral.style.display = "none";
});


//Cards

var cardLeft = document.getElementById("card-left"); // Cambiar el id "card-left" a "cardLeft"
var h3Left = document.getElementById("nproducto-left")
var pLeft = document.getElementById("pproducto-left")

var cardCenter = document.getElementById("card-center");
var h3Center = document.getElementById("nproducto-center");
var pCenter = document.getElementById("pproducto-center")

var cardRight = document.getElementById("card-right");
var h3Right = document.getElementById("nproducto-right");
var pRight = document.getElementById("pproducto-right");



cardLeft.addEventListener("click",function() {
    cardCenter.style.width = "100px";
    cardCenter.style.height = "500px";
    cardLeft.style.width = "400px";
    cardLeft.style.height = "600px";
    cardRight.style.width = "100px";
    cardRight.style.height = "500px";
    h3Left.style.display = "block"
    pLeft.style.display = "block"
    h3Center.style.display = "none"
    pCenter.style.display = "none"
    h3Right.style.display = "none"
    pRight.style.display = "none"
});

cardRight.addEventListener("click", function() {
    cardCenter.style.width = "100px";
    cardCenter.style.height = "500px";
    cardRight.style.width = "400px";
    cardRight.style.height = "600px";
    cardLeft.style.width = "100px";
    cardLeft.style.height = "500px";
    h3Right.style.display = "block"
    pRight.style.display = "block"
    h3Left.style.display = "none"
    pLeft.style.display = "none"
    h3Center.style.display = "none"
    pCenter.style.display = "none"
})

cardCenter.addEventListener("click", function(){
    cardLeft.style.width = "100px";
    cardLeft.style.height = "500px";
    cardCenter.style.width = "400px";
    cardCenter.style.height = "600px";
    cardRight.style.width = "100px";
    cardRight.style.height = "500px";
    h3Center.style.display = "block"
    pCenter.style.display = "block"
    h3Right.style.display = "none"
    pRight.style.display = "none"
    h3Left.style.display = "none"
    pLeft.style.display = "none"
})




cardLeft.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        cardCenter.style.width = "200px";
        cardCenter.style.height = "600px";
        cardLeft.style.width = "300px"
        cardLeft.style.height = "720px";
        cardRight.style.width = "200px";
        cardRight.style.height = "600px";
    }
});

cardRight.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        cardCenter.style.width = "200px";
        cardCenter.style.height = "600px";
        cardRight.style.width = "300px"
        cardRight.style.height = "720px";
        cardLeft.style.width = "200px";
        cardLeft.style.height = "600px";
    }
});

cardCenter.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        cardRight.style.width = "200px";
        cardRight.style.height = "600px";
        cardCenter.style.width = "300px"
        cardCenter.style.height = "720px";
        cardLeft.style.width = "200px";
        cardLeft.style.height = "600px";
    }
});

cardLeft.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        cardCenter.style.width = "300px";
        cardCenter.style.height = "700px";
        cardLeft.style.width = "400px"
        cardLeft.style.height = "800px";
        cardRight.style.width = "300px";
        cardRight.style.height = "700px";
    }
});

cardRight.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        cardCenter.style.width = "300px";
        cardCenter.style.height = "700px";
        cardRight.style.width = "400px"
        cardRight.style.height = "800px";
        cardLeft.style.width = "300px";
        cardLeft.style.height = "700px";
    }
});

cardCenter.addEventListener("click", function() {
    if (window.matchMedia("(min-width: 1024px)").matches) {
        cardRight.style.width = "300px";
        cardRight.style.height = "700px";
        cardCenter.style.width = "400px"
        cardCenter.style.height = "800px";
        cardLeft.style.width = "300px";
        cardLeft.style.height = "700px";
    }
});


/*var cardOne = document.getElementsByClassName("card-one")
var cardTwo = document.getElementById("card-two")

cardOne.addEventListener("onmouseup", function(){

})*/


