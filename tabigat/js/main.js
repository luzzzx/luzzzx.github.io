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

// progress bar
new CircleProgress('.bar-circle', {
	max: 100,
	value: 80,
  textFormat: 'none',
});


// counts progress
var number = document.querySelector('.numberof'),
		numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

var interval = setInterval(function() {
      number.innerHTML = ++start;
      if(start == end) {
          clearInterval(interval);
      }
  }, 5);