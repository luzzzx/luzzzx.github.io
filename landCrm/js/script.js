$(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
$(document).ready(function () {
    $('.burger-menu').on("click", function () {
        $('.burger-menu').toggleClass('active');
    });
    $(".slider-sert").owlCarousel({
        loop: true,
        margin: 30,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1,
                nav: true,
            },
            // breakpoint from 480 up
            480: {
                items: 2,
                nav: false,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
                nav: true,
            }
        }
    });
    $(".comment-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true,
    });
});