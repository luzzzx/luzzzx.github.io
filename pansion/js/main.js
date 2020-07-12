$(document).ready(function () {
    $('.main-slider__body').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        items: 1,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            720: {
                items: 1,
                nav: true,
            }
        }
    })
});
$(document).ready(function () {
    $('.need-help__slider').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            560: {
                items: 2,
            },
            720: {
                items: 3,
            },
            960: {
                items: 4,
            },
        }
    })
});
$(document).ready(function () {
    $('.for-free__slider').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            560: {
                items: 2,
            },
            720: {
                items: 3,
            },
            960: {
                items: 4,
            },
        }
    })
});

$(document).ready(function () {
    $('.houses__slider').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            560: {
                items: 2,
            },
            720: {
                items: 3,
            },
            960: {
                items: 4,
            },
        }
    })
});

$(document).ready(function () {
    $('.already-help__slider').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            560: {
                items: 2,
            },
            720: {
                items: 3,
            },
            960: {
                items: 4,
            },
        }
    })
});

$(document).ready(function () {
    $('.comments-slider__body').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            720: {
                items: 2,
                margin: 20,
            },
            960: {
                margin: 20,
                items: 3,
            },
        }
    })
});

$(document).ready(function () {
    $('.history-slider').owlCarousel({
        // autoWidth: true,
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            // breakpoint from 480 up
            480: {
                items: 1,
            },
            // breakpoint from 768 up
            560: {
                items: 2,
                margin: 30,
            },
            720: {
                items: 3,
                margin: 30,
            },
            960: {
                items: 5,
                margin: 30,
            },
        }
    })
});