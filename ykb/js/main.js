$(document).ready(function () {
    $('.main-slider').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
        onInitialized: counter,
        onChanged: counter
    })
    $('.owl-prev').addClass('icon-prev');
    $('.owl-next').addClass('icon-next');
    function counter(event) {
        if (!event.namespace) {
            return;
        }
        var slides = event.relatedTarget;
        $('#counter').text(slides.relative(slides.current()) + 1 + ' / ' + slides.items().length);
    }
    $('.main-slider .owl-prev').after('<div id="counter"> 1 / 2 </div>');

    $('.slider-work').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        dots: false,
    })
    $('.comments-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    })

    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    $('.submenu').on('click', function () {
        $(this).toggleClass('active')
        $(this).next().toggleClass('show');
    });

    // burger menu

    $('.header-top__burger').on('click', function () {
        $('body').toggleClass('lock');
        $('.header-top__burger').toggleClass('active');
        $('.main-menu').toggleClass('active');

    });
    // $(window).resize(function () {
    //     var w = $(window).width();
    //     if (w < 932) {
    //         $('.dropdown-menu.show').removeAttr('style');
    //         // $('.dropdown-menu').toggle();
    //     }
    // });

    // side menu
    $('.mobile-side').on('click', function () {
        $(this).next('.side-menu__body').slideToggle();
    });
    // about

    $('.about-age__slider').owlCarousel({
        loop: false,
        items: 1,
        nav: true,
        dots: true,
    })
});