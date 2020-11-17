$(document).ready(function () {
    $('.comments-slider').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 3,
            },
        },
        autoplay: true,
        autoplayTimeout: 5000
    });

    $('.brands-slider').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 5,
            },
        }
    });

    $('.phone-menu').on("click", function (e) {
        e.preventDefault();
        $(this).next('.drop-phone-menu').slideToggle();
    });
});