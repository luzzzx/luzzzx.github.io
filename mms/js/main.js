$(document).ready(function () {

    $('.banner-slider__body').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true
    });
    $('.prod-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });
    $('.matras-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        loop: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

});