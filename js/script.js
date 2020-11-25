
/* Loading */

window.onload = function(){
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
}


/* Boton Menú*/

if (window.matchMedia("(max-width:768px)").matches){

    $(".botonMenu").click(function(){

        $(".menuMovil").slideToggle('fast');
        $(".menuMovil").css({"top":$("header").height()})
        

    })

    $(".menuMovil ul li a").click(function (e){

        $(".menuMovil").slideToggle('fast');
    
        e.preventDefault();
    
        var vinculo = $(this).attr("href");
    
        $("html, body").animate({
    
            scrollTop: $(vinculo).offset().top - 55
            
        }, 1000, "easeInOutBack")
    
    })


}else{

    $(".botonMenu").click(function(){
        $(".menu").slideToggle('fast');
        $(".formReservas").slideUp('fast');
    })

    $(".menu ul li a").click(function (e){

        $(".menu").slideToggle('fast');
    
        e.preventDefault();
    
        var vinculo = $(this).attr("href");
    
        $("html, body").animate({
    
            scrollTop: $(vinculo).offset().top - 60

        }, 1000, "easeInOutBack")
    
    })

}


/* Scroll UP */


$.scrollUp({
    scrollText: "",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})


/* Agregar al carrito  */

let count = 0;

const counter = document.getElementById('counter');

document.getElementById('add-animation').addEventListener('click', event => {
    const cl = counter.classList;
    const c  = 'animation-counter';

    count++;
    counter.innerText = count;
    
    cl.remove(c, cl.contains(c));

    setTimeout(() =>
        counter.classList.add('animation-counter')
    , 1);
});
