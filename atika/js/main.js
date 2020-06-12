$(document).ready(function() {
    $('.slider').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.slider-cntrls'),
        appendDots: $('.slider-cntrls'),
    });
});

// product

$(document).ready(function() {
    $('.product-slider').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.cntrls_prod'),
        appendDots: $('.cntrls_prod'),
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    });
});

// hits

$(document).ready(function() {
    $('.hits-slider').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.cntrls_hits'),
        appendDots: $('.cntrls_hits'),
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
    });
});

// instagram slider

$(document).ready(function() {
    $('.instagram-slider').slick({
        arrows: true,
        dots: true,
        appendArrows: $('.cntrls_instagram'),
        appendDots: $('.cntrls_instagram'),
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 3,
    });
});

// choose-slider

$('.detail-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.detail-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
});

// accordion

$(".accordion_tab").click(function() {
    $(".accordion_tab").each(function() {
        $(this).parent().removeClass("active");
        $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
});

// numbers
$(function() {

    $('input[type="number"]').niceNumber({

        // custom button text
        buttonDecrement: '',
        buttonIncrement: "",

    });



});