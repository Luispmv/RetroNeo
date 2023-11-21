AOS.init();

var backgroundProducts = document.getElementsByClassName("carousel"); // Obtiene una colección de elementos
var botonColor1 = document.getElementById("color1");
var botonColor2 = document.getElementById("color2");
var botonColor3 = document.getElementById("color3");
var botonColor4 = document.getElementById("color4");
var camisa = document.getElementById("camisa")
var camisatwo = document.getElementById("camisa-view-two")
var camisaThree = document.getElementById("camisa-view-three")
var camisaFour = document.getElementById("camisa-view-four")

var botonCompra = document.getElementById("boton-compra")
botonCompra.addEventListener("click", function(){
    Swal.fire({
        title: 'Agregado al carrito exitosamente',
        icon: 'success',
        confirmButtonText: 'Cool',
        customClass:{
            popup: "popup",
            confirmButton : "botonConfirmacion"
        }
    })
})

// Asegúrate de que backgroundProducts contenga al menos un elemento antes de intentar acceder a sus propiedades
if (backgroundProducts.length > 0) {
    var backgroundProduct = backgroundProducts[0]; // Tomamos el primer elemento de la colección

    
    botonColor1.addEventListener("click", function() {
        backgroundProduct.style.backgroundImage = "url('./img/RetroProductPurpleBackground.svg')";
        backgroundProduct.style.backgroundPosition = "center";
        backgroundProduct.style.backgroundRepeat = "no-repeat";
        backgroundProduct.style.backgroundSize = "cover";
        camisa.src = "./img/Purple-shirt.svg"
        camisatwo.src = "./img/PurpleShirtBack.svg"
        camisaThree.src = "./img/ModelPurple.svg"
        camisaFour.src = "./img/ModelBackPurple.svg"
    });
    botonColor2.addEventListener("click", function() {
        backgroundProduct.style.backgroundImage = "url('./img/RetroProductRedBackground.svg')";
        backgroundProduct.style.backgroundPosition = "center";
        backgroundProduct.style.backgroundRepeat = "no-repeat";
        backgroundProduct.style.backgroundSize = "cover";
        camisa.src = "./img/Red-shirt.svg";
        camisatwo.src = "./img/RedShirtBack.svg"
        camisaThree.src = "./img/ModelRed.svg"
        camisaFour.src = "./img/ModelBlackRed.svg"
    });
    botonColor3.addEventListener("click", function() {
        backgroundProduct.style.backgroundImage = "url('./img/RetroProductBackgroundGreen.svg')";
        backgroundProduct.style.backgroundPosition = "center";
        backgroundProduct.style.backgroundRepeat = "no-repeat";
        backgroundProduct.style.backgroundSize = "cover";
        camisa.src = "./img/Green-shirt.svg"
        camisatwo.src = "./img/GreenShirtBack.svg"
        camisaThree.src = "./img/ModelGreen.svg"
        camisaFour.src = "./img/ModelBackGreen.svg"
    });
    botonColor4.addEventListener("click", function() {
        backgroundProduct.style.backgroundImage = "url('./img/RetroProductBackgroundBlue.svg')";
        backgroundProduct.style.backgroundPosition = "center";
        backgroundProduct.style.backgroundRepeat = "no-repeat";
        backgroundProduct.style.backgroundSize = "cover";
        camisa.src = "./img/Blue-shirt.svg"
        camisatwo.src = "./img/BlueShirtBack.svg"
        camisaThree.src = "./img/ModelBlue.svg"
        camisaFour.src = "./img/ModelBackBlue.svg"
    });
}
