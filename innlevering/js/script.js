$(document).ready(function () { 
    //Kjøres når alt HTML innhold er ferdig lastet ned
    $(window).scroll(function () {  
        //Nav-bar sticky script ved scrolling
        //Legger til classen "navbar-fixed" på elementet med id=nav når man har scrollet 143 pixels ned slik at navbar legges fast på toppen av siden           
        if ($(window).scrollTop() > 2) {
            $('#nav').addClass('navbar-fixed');
        } 
        if ($(window).scrollTop() < 2) {
            $('#nav').removeClass('navbar-fixed');        
        }
    });
});
