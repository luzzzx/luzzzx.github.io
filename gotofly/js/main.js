$('.comments-body-slider').owlCarousel({
    dots: true,
    autoplay: true,
    items: 1,
    // loope: true,
    autoplayTimeout: 3000
});

$('.burger-menu').on("click", function () {
    $('.burger-menu').toggleClass('active');
    $('#navbar-main').toggleClass('active');
    $('body').toggleClass('lock');
});

$(".js-range-slider").ionRangeSlider({
    skin: "round",
    type: "double",
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});


$('.product-slider__body').owlCarousel({
    items:1,
    loop:false,
    center:true,
    dots:false,
    URLhashListener:true,
    autoplayHoverPause:true,
    startPosition: 'URLHash'
});


$(".product-slider__thumb a").click(function(e) {
    $(".product-slider__thumb a").removeClass('active');
    $(this).addClass('active');
  })
