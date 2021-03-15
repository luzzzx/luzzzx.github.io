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