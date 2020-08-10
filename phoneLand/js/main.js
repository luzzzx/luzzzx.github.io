AOS.init();
$('.comment-slider').owlCarousel({
    loop: true,
    items: 3,
    margin: 30,
    nav: true,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
            nav: false
        },
        // breakpoint from 480 up
        480: {
            items: 1,
            nav: false
        },
        // breakpoint from 768 up
        768: {
            items: 2,
            nav: false
        },
        992: {
            items: 3,
            nav: true
        }
    }
})