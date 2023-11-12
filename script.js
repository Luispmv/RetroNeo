var swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop:true,
    coverflowEffect:{
        depth:500,
        modifer:1,
        slidesShadow:true,
        rotate: 0,
        stretch:0
    },
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false 
    // }
})

var menu = document.getElementById("menu-anchor");
var menu_lateral = document.getElementById("pop-up-nv");
var icono_cerrar = document.getElementById("close-icon-id");

menu.addEventListener("click", function() {
    menu_lateral.style.display = "block";
});

icono_cerrar.addEventListener("click", function() {
    menu_lateral.style.display = "none";
});


