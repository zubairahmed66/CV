$(document).ready(function () {
    "use strict";


    //counter

    $('.education_box').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplayspeed: 1000,
        autoplay: true,
        showNextPrev: false,
        prevArrow: '<button class="PrevArrow"></button>',
        nextArrow: '<button class="NextArrow"></button>',
    });
});
