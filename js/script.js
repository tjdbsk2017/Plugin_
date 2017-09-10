$(document).ready(function(){
    

    $('.owl-carousel').owlCarousel({
        items : 1,
        loop : true
    });
    
});

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30
    });