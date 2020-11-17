$(document).ready(function(){
    $(".js--about-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });

    //CAROUSEL//

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1
    });

    //CAROUSEL BUTTON//

    $('.control-prev-btn').click(function(){
        $('.owl-prev').trigger('click');
    });
    $('.control-next-btn').click(function(){
        $('.owl-next').trigger('click');
    });












});
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

