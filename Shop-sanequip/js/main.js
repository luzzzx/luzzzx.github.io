$(document).ready(function () {
    $(".main-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: true
    });
    $('.product-slider-body').owlCarousel({
        items: 1,
        loop: false,
        center: true,
        nav: true,
        URLhashListener: true,
        autoplayHoverPause: true,
        startPosition: 'URLHash'
    });

    $(".article-slider").owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        responsive: {
            520: {
                items: 2,
                margin: 30,
                nav: false,
            },
            768: {
                items: 3,
                margin: 90,
                nav: true,
            }
        }
    });

    $(".show-room__slider").owlCarousel({
        loop: true,
        items: 1,
        margin: 30,
        nav: false,
        responsive: {
            520: {
                items: 2,
                margin: 30,
                nav: false,
            },
            768: {
                items: 4,
                margin: 90,
                nav: true,
            }
        }
    });

    $('.min').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(".tabs-item").on("click", function () {
        let $this = $(this),
            i = $this.data("id");
        $this.addClass("active").siblings().removeClass("active");
        $this
            .closest('.tabs')
            .find(".tab-main [data-id=" + i + "]")
            .addClass("active")
            .siblings()
            .removeClass("active");
    });


    var slider = document.getElementById('side-filter__slider');

    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });


});
