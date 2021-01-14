$(document).ready(function () {

  $('.main-slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    slidesToScroll: 1
  });
  
  $('.header-catalog').on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.catalog-menu').toggleClass('active');
  });

  $('.for-you-slider').slick({
    infinite: true,
    slidesToShow: 4,
    dots: false,
    arrows: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // burger menu
  $('.burger-menu').on("click", function (e) {
    e.preventDefault();
    $('#nav-header-menu').slideToggle();
    $('#nav-header-menu').css('display', 'flex');
  });
});