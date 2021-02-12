// Array.from(document.querySelectorAll('.scroll_container'))
//   .forEach(
//     el => new SimpleBar(el, {
//       autoHide: false,
//     })
//   );

// document.querySelectorAll('.scroll_container').forEach(el => {
//     new SimpleBar(el, {
//               autoHide: false,
//             })
// });

// var ContentScroll = document.querySelector('.scroll-content');
// var MainScroll = document.querySelector('.scroll-main');
// new SimpleBar(ContentScroll, {
//     autoHide: false,
// });

// new SimpleBar(MainScroll, {
//     autoHide: false,
// });


$('.dropdown-menu li').on('click', function() {
  var getValue = $(this).text();
  $('.dropdown-select').text(getValue);
});

$('.slider-main').slick({
  centerMode: true,
  centerPadding: '32px',
  slidesToShow: 1.65,
  prevArrow: $('.product-slider__thumb-prev'),
  nextArrow: $('.product-slider__thumb-next'),
  responsive: [
    {
      breakpoint: 791,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

$('.mobile-menu').on('click', function() {
  $(this).next('nav').slideToggle();
});