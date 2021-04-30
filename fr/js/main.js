$(document).ready(function () {
    
// menu

$('.burger-btn').click(function(e) {
  e.preventDefault();
  $('.main-menu').toggleClass('active');
  $('body').toggleClass('lock');
  $('html').toggleClass('lock');
});

$('.main-menu__close').click(function(e) {
  e.preventDefault();
  $('.main-menu').removeClass('active');
  $('body').removeClass('lock');
  $('html').removeClass('lock');
});


// 


var $slider = $('.slider-main__body');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  var firstCounter = document.createElement('span');
  var sliderNum = $('.slider-num');
  sliderCounter.classList.add('slider-hero__counter');
  firstCounter.classList.add('slider-hero__number');
  
  
  var updateSliderCounter = function(slick, currentIndex) {   
    currentSlide = (slick.slickCurrentSlide() + 1);
    slidesCount = slick.slideCount;
    $(firstCounter).text('0' + currentSlide);
    $(sliderCounter).text(' — ' + '0' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    sliderNum.append(firstCounter);
    sliderNum.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    useTransform: false,
    slidesToShow: 1,
    prevArrow: $('.slider-main-prev'),
    nextArrow: $('.slider-main-next')
  });
}



// slider-tabs
function sliderTab1() {

var $sliderTab = $('.tab1');

if ($sliderTab.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  var firstCounter = document.createElement('span');
  var sliderNum = $('.slider-num-tab1');
  sliderCounter.classList.add('slider-hero__counter');
  firstCounter.classList.add('slider-hero__number');
  
  
  var updateSliderCounter = function(slick, currentIndex) {   
    currentSlide = (slick.slickCurrentSlide() + 1);
    slidesCount = slick.slideCount;
    $(firstCounter).text('0' + currentSlide);
    $(sliderCounter).text(' — ' + '0' + slidesCount)
  };

  $sliderTab.on('init', function(event, slick) {
    sliderNum.append(firstCounter);
    sliderNum.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $sliderTab.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $sliderTab.slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    useTransform: false,
    slidesToShow: 2,
    prevArrow: $('.slider-tab1-prev'),
    nextArrow: $('.slider-tab1-next')
  });
}

}

function sliderTab2() {

  var $sliderTab = $('.tab2');
  
  if ($sliderTab.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    var firstCounter = document.createElement('span');
    var sliderNum = $('.slider-num-tab2');
    sliderCounter.classList.add('slider-hero__counter');
    firstCounter.classList.add('slider-hero__number');
    
    
    var updateSliderCounter = function(slick, currentIndex) {   
      currentSlide = (slick.slickCurrentSlide() + 1);
      slidesCount = slick.slideCount;
      $(firstCounter).text('0' + currentSlide);
      $(sliderCounter).text(' — ' + '0' + slidesCount)
    };
  
    $sliderTab.on('init', function(event, slick) {
      sliderNum.append(firstCounter);
      sliderNum.append(sliderCounter);
      updateSliderCounter(slick);
    });
  
    $sliderTab.on('afterChange', function(event, slick, currentSlide) {
      updateSliderCounter(slick, currentSlide);
    });
  
    $sliderTab.slick({
      dots: false,
      arrows: true,
      infinite: true,
      autoplay: false,
      useTransform: false,
      slidesToShow: 2,
      prevArrow: $('.slider-tab2-prev'),
      nextArrow: $('.slider-tab2-next')
    });
  }
  
}

function sliderTab3() {

    var $sliderTab = $('.tab3');
    
    if ($sliderTab.length) {
      var currentSlide;
      var slidesCount;
      var sliderCounter = document.createElement('div');
      var firstCounter = document.createElement('span');
      var sliderNum = $('.slider-num-tab3');
      sliderCounter.classList.add('slider-hero__counter');
      firstCounter.classList.add('slider-hero__number');
      
      
      var updateSliderCounter = function(slick, currentIndex) {   
        currentSlide = (slick.slickCurrentSlide() + 1);
        slidesCount = slick.slideCount;
        $(firstCounter).text('0' + currentSlide);
        $(sliderCounter).text(' — ' + '0' + slidesCount)
      };
    
      $sliderTab.on('init', function(event, slick) {
        sliderNum.append(firstCounter);
        sliderNum.append(sliderCounter);
        updateSliderCounter(slick);
      });
    
      $sliderTab.on('afterChange', function(event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
      });
    
      $sliderTab.slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: false,
        useTransform: false,
        slidesToShow: 2,
        prevArrow: $('.slider-tab3-prev'),
        nextArrow: $('.slider-tab3-next')
      });
    }
    
}

function sliderTab4() {

      var $sliderTab = $('.tab4');
      
      if ($sliderTab.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        var firstCounter = document.createElement('span');
        var sliderNum = $('.slider-num-tab4');
        sliderCounter.classList.add('slider-hero__counter');
        firstCounter.classList.add('slider-hero__number');
        
        
        var updateSliderCounter = function(slick, currentIndex) {   
          currentSlide = (slick.slickCurrentSlide() + 1);
          slidesCount = slick.slideCount;
          $(firstCounter).text('0' + currentSlide);
          $(sliderCounter).text(' — ' + '0' + slidesCount)
        };
      
        $sliderTab.on('init', function(event, slick) {
          sliderNum.append(firstCounter);
          sliderNum.append(sliderCounter);
          updateSliderCounter(slick);
        });
      
        $sliderTab.on('afterChange', function(event, slick, currentSlide) {
          updateSliderCounter(slick, currentSlide);
        });
      
        $sliderTab.slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: false,
          useTransform: false,
          slidesToShow: 2,
          prevArrow: $('.slider-tab4-prev'),
          nextArrow: $('.slider-tab4-next')
        });
      }
      
}
      
sliderTab1();
sliderTab2();
sliderTab3();
sliderTab4();

// basket quanity

$('.btn-plus, .btn-minus').on('click', function(e) {
  const isNegative = $(e.target).closest('.btn-minus').is('.btn-minus');
  const input = $(e.target).closest('.input-group').find('input');
  if (input.is('input')) {
    input[0][isNegative ? 'stepDown' : 'stepUp']()
  }
})


// card slider

$('.card-slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: false,
  asNavFor: '.card-thumb'
});
$('.card-thumb').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.card-slider-main',
  dots: false,
  arrows: true,
  prevArrow: $('.card-thumb-prev'),
  nextArrow: $('.card-thumb-next'),
  focusOnSelect: true
});


// card more product

/* Slick needs no get Reinitialized on window Resize after it was destroyed */
  $(window).on('load resize orientationchange', function() {
      $('.more-product-row').each(function(){
          var $carousel = $(this);
          /* Initializes a slick carousel only on mobile screens */
          // slick on mobile
          if ($(window).width() > 768) {
              if ($carousel.hasClass('slick-initialized')) {
                  $carousel.slick('unslick');
              }
          }
          else{
              if (!$carousel.hasClass('slick-initialized')) {
                  $carousel.slick({
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      mobileFirst: true,
                      prevArrow: $('.more-prod-prev'),
                      nextArrow: $('.more-prod-next'),
                  });
              }
          }
      });
  });

// blog mobile slider

  $(window).on('load resize orientationchange', function() {
    $('.popular-slider').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 768) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    prevArrow: $('.popular-prev'),
                    nextArrow: $('.popular-next'),
                });
            }
        }
    });
  });


// about slider
$('.about-slider').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  useTransform: false,
  slidesToShow: 1,
  prevArrow: $('.about-slider-prev'),
  nextArrow: $('.about-slider-next')
});

// slider-payment

// $('.payment-slider-next').click(function(e) {
//   e.preventDefault();
//   $('.payment-slider').find('.nav-link.active').removeClass('active').attr("aria-selected","false").parent().next().find('.nav-link').addClass('active').attr("aria-selected","true");
// });

// $('.payment-slider-prev ').click(function(e) {
//   e.preventDefault();
//   $('.payment-slider').find('.nav-link.active').removeClass('active').attr("aria-selected","false").parent().prev().find('.nav-link').addClass('active').attr("aria-selected","true");
// });


});