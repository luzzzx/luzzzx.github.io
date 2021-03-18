$('.hero-slide__main').slick({
    slidesToShow: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.hero-slider__prev'),
    nextArrow: $('.hero-slider__next'),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          dots: true,
          arrows: false,
        }
      }
    ]
});

$('.comments-slider__body').slick({
  slidesToShow: 2,
  arrows: true,
  prevArrow: $('.comments-slider__prev'),
  nextArrow: $('.comments-slider__next'),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

$(".burger-menu").click(function(e){
  $(this).next('nav').toggleClass('active');
  $(this).toggleClass('active');
  $('html').toggleClass('lock');
  $('body').toggleClass('lock');
});

$(".drp-btn").click(function(e){
  $(this).next().toggleClass('active');
  
});

if ($(window).width() < 767) {
  $(".footer-menu__title").click(function(e){
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });
}

(function($){
  $('.product-slider__body-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    infinite: false,
    arrows: false,
    asNavFor: '.product-slider__thumb'
  });
  
  $('.product-slider__thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    asNavFor: '.product-slider__body-main',
    focusOnSelect: true,
  });

})(jQuery);


(function($){
  $('.btn-plus, .btn-minus').on('click', function(e) {
    const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
    const input = $(e.target).closest('.input-group-price').find('input');
    if (input.is('input')) {
      input[0][isNegative ? 'stepDown' : 'stepUp']()
    }
  })
})(jQuery);


(function($){
  $(window).on('load resize', function() {
    if ($(window).width() < 640) {
      $('.info-intro-slider__row').slick({
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        arrows: false,
      });
    } else {
      $('.info-intro-slider__row').slick("unslick");
    }
  });

})(jQuery);


(function($){
  $(".category-nav__btn").click(function(e){
    e.preventDefault();
    $(this).next('ul').slideToggle({
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
  });
})(jQuery);