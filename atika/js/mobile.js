$(document).ready(function() {
    $('.topnav__burger').click(function(event) {
        $('.topnav__burger, .topnav__list').toggleClass('active');
    });
});

$(".accordion_tab").click(function() {
    $(".accordion_tab").each(function() {
        $(this).parent().removeClass("active");
        $(this).removeClass("active");
    });
    $(this).parent().addClass("active");
    $(this).addClass("active");
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