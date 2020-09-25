$(document).ready(function () {
    $('.dd-menu').on("click", function () {
        $(this).find('.drop-down').slideToggle();
    }
    );
    $('.burger').on("click", function () {
        $('.burger').toggleClass('active');
        $('.header-mid').slideToggle();
    });
    $(window).resize(function () {
        var w = $(window).width();
        if (w > 935) {
            $('.header-mid').removeAttr('style');
            $('.burger').removeClass('active');
        }
    });
    $('.private.active').on("click", function () {
        $('.drop-down__room').toggleClass('active');
        // $('.burger').toggleClass('active');
        // $('.header-mid').slideToggle();
    });
    $('.main-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navContainer: '.nav-slider',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
});