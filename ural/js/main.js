$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
        // breakpoint from 0 up
        0: {
            items: 1,
            nav: false
        },

        // breakpoint from 768 up
        768: {
            items: 2,
            nav: true
        }
    }
})

$(document).ready(function () {
    $(".burger-menu").on("click", function () {
        $(".burger-menu").toggleClass("active");
        $(".burger-menu").next().slideToggle("slow");
    });
    $(window).resize(function () {
        if ($(this).width() > 880 && $(".burger-menu").next().is(":hidden")) {
            $(".burger-menu").next().removeAttr("style");
        }
    });
});