$('.product-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    responsive: [
        {
            breakpoint: 626,
            settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ],
    asNavFor: '.product-thumb'
});
$('.product-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-slide',
    arrows: true,
    vertical: true,
    focusOnSelect: true

});

$('.product-related__row').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    dots: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 683,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.recently-viewed__row').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    dots: false,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 683,
            settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});
