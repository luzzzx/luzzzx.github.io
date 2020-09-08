$(document).ready(function () {
    $('.main-slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        var itemSl = carousel.relative(carousel.current()) + 1;
        var sum = carousel.items().length;
        $('#counter').html("" + "<span>" + "0" + itemSl + "</span>" + '/' + "0" + sum);
    }).owlCarousel({
        items: 1,
        loop: true,
    });
});


// $(function () {
//     var owl = $('.owl-carousel');
//     owl.owlCarousel({
//         loop: true,
//         autoplay: 4000,
//         items: 1,
//         onInitialized: counter, //When the plugin has initialized.
//         onTranslated: counter //When the translation of the stage has finished.
//     });

//     function counter(event) {
//         var element = event.target;         // DOM element, in this example .owl-carousel
//         var slides = event.relatedTarget;
//         var items = event.item.count;     // Number of items
//         var item = event.page.index + 1;     // Position of the current item
//         if (item == 0) {
//             item = 1;
//         }
//         $('#counter').html("" + "<span>" + "0" + item + "</span>" + " / " + "0" + items)
//     }
// });

$(function () {
    $('.burger-header').on('click', function () {
        $('.burger-menu').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(function () {
    var owl = $('.slider-best');
    owl.owlCarousel({
        loop: true,
        autoplay: 4000,
        items: 1,
    });
});

$(window).ready(function () {
    var viewport = $(window).width();

    if (viewport <= 759) {
        var mvp = document.getElementById('vp');
        mvp.setAttribute('content', 'user-scalable=no,width=480');
    }

});
