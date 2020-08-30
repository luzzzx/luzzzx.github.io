$(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        autoplay: 2000,
        items: 1,
        onInitialized: counter, //When the plugin has initialized.
        onTranslated: counter //When the translation of the stage has finished.
    });

    function counter(event) {
        var element = event.target;         // DOM element, in this example .owl-carousel
        var items = event.item.count;     // Number of items
        var item = event.page.index + 1;     // Position of the current item
        if (item == 0) {
            item = 1;
        }
        $('#counter').html("" + "<span>" + "0" + item + "</span>" + " / " + "0" + items)
    }
});

$(function () {
    $('.burger-header').on('click', function () {
        $('.burger-menu').toggleClass('active');
        $(this).toggleClass('active');
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
