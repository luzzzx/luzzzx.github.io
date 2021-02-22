
var $slider = $('.slider-hero');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  var firstCounter = document.createElement('span');
  sliderCounter.classList.add('slider-hero__counter');
  firstCounter.classList.add('slider-hero__number');
  
  var updateSliderCounter = function(slick, currentIndex) {   
    currentSlide = (slick.slickCurrentSlide() + 1);
    slidesCount = slick.slideCount;
    $(firstCounter).text(currentSlide);
    $(sliderCounter).text('  /  ' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    $slider.append(firstCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 1500,
    autoplay: true,
    slidesToShow: 1,
  });
}

$('.new-product-slider').slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $('.new-product-slider__prev'),
  nextArrow: $('.new-product-slider__next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.sale-product-slider').slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $('.sale-product-slider__prev'),
  nextArrow: $('.sale-product-slider__next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2
      }
    }
  ]
});

$('.season-product-slider').slick({
  slidesToShow: 3,
  arrows: true,
  prevArrow: $('.season-product-slider__prev'),
  nextArrow: $('.season-product-slider__next'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

$('.our-shop-slider__main').slick({
  slidesToShow: 3,
  arrows: true,
  verticalSwiping: true,
  vertical: true,
  prevArrow: $('.our-shop-slider__prev'),
  nextArrow: $('.our-shop-slider__next')
});

// slider instagramm

$('.instagramm-gallery__slider').slick({
  arrows: true,
  dots: false,
  slidesPerRow: 6,
  fade: true,
  rows: 2,
  speed: 900,
  infinite: true,
  slidesToShow: 1,
  prevArrow: $('.instagramm-gallery__slider-prev'),
  nextArrow: $('.instagramm-gallery__slider-next'),
  responsive: [
    {
      breakpoint: 1228,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 5,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 3,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesPerRow: 3,
        rows: 3
      }
    }
  ]

});


// slider about

$('.about-shop__slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.about-shop__slider-nav-main'
});

$('.about-shop__slider-nav-main').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  infinite: true,
  asNavFor: '.about-shop__slider-main',
  focusOnSelect: true,
  prevArrow: $('.about-shop__slider-nav-prev'),
  nextArrow: $('.about-shop__slider-nav-next'),
  responsive: [
    {
      breakpoint: 760,
      settings: {
        vertical: false
      }
    }
  ]
});


// brands slider

$('.brands-body-slider').slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $('.brands-body-slider__next'),
  nextArrow: $('.brands-body-slider__prev'),
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});


// burger menu

$('.burger-menu').on("click", function () {
  $('.burger-menu').toggleClass('active');
  $('.main-nav').toggleClass('active');
  // $('body').append('<div class="modal-backdrop fade show"></div>');
});

// console.log($('.instagramm-gallery__item')[0].clientWidth);


// certificat 
$(window).on('load resize', function () {
  if ($(this).width() < 992) {
 
    if ($('.certificate-row__item').length > 3) {
      $('.certificate-row__item:gt(2)').addClass('extra');
      // $('.road-slider__item:gt(2)').hide();
    }
  } 
  // if ($(this).width() < 760){

  //   if ($('.certificate-row__item').length > 2) {
  //     $('.certificate-row__item:gt(1)').addClass('extra');
  //     // $('.road-slider__item:gt(2)').hide();
  //   }
  // }
  else {
      $('.certificate-row__item').removeClass('extra');
  }
})

// brands

$(window).on('load resize', function () {
  if ($(this).width() < 992) {
 
    if ($('.news-body').length > 2) {
      $('.news-body:gt(1)').addClass('extra');
      // $('.road-slider__item:gt(2)').hide();
    }
  } else {
      $('.news-body').removeClass('extra');
  }
})