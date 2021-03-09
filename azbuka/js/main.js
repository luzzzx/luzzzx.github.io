
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

$('.popular-product-slider').slick({
  slidesToShow: 4,
  arrows: true,
  prevArrow: $('.popular-product-slider__prev'),
  nextArrow: $('.popular-product-slider__next'),
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
});

// 


// certificat 
$(window).on('load resize', function () {
  if ($(this).width() < 992) {
 
    if ($('.certificate-row__item').length > 3) {
      $('.certificate-row__item:gt(2)').addClass('extra');
      // $('.road-slider__item:gt(2)').hide();
    }
  } 
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


// list grid btns

$("#column-prod").click(function(e){
  e.preventDefault();
  $(this).addClass('active');
  $('.product-card').removeClass("list");
  $('.product-card').removeClass("grid");
  $('.catalog-product__main-item').removeClass("list");
  $('.catalog-product__main-item').removeClass("grid");
  $('#grid-prod').removeClass('active');
  $('#list-prod').removeClass('active');
  $('.product-card').addClass("column");
  $('.catalog-product__main-item').addClass("column");
});

$("#grid-prod").click(function(e){
  e.preventDefault();
  $(this).addClass('active');
  $('.product-card').removeClass("list");
  $('.product-card').removeClass("column");
  $('.catalog-product__main-item').removeClass("column");
  $('.catalog-product__main-item').removeClass("list");
  $('#list-prod').removeClass('active');
  $('#column-prod').removeClass('active');
  $('.product-card').addClass("grid");
  $('.catalog-product__main-item').addClass("grid");
});

$("#list-prod").click(function(e){
  e.preventDefault();
  $(this).addClass('active');
  $('.product-card').removeClass("grid");
  $('.product-card').removeClass("column");
  $('.catalog-product__main-item').removeClass("grid");
  $('.catalog-product__main-item').removeClass("column");
  $('#grid-prod').removeClass('active');
  $('#column-prod').removeClass('active');
  $('.product-card').addClass("list");
  $('.catalog-product__main-item').addClass("list");
});

$(window).on('load resize', function () {
  if ($(this).width() < 765) {
    $('.catalog-product__main-item').removeClass("grid");
    $('.catalog-product__main-item').removeClass("column");
    $('.catalog-product__main-item').removeClass("list");
    $('.product-card').removeClass("grid");
    $('.product-card').removeClass("column");
    $('.product-card').removeClass("list");
    $('#grid-prod').removeClass('active');
    $('#column-prod').removeClass('active');
    $('#list-prod').removeClass('active');
  } else{
    $('.catalog-product__main-item').addClass("list");
    $('#list-prod').addClass('active');
    $('.product-card').addClass("list");
  }
})
// catalog range



function priceSlider(){
  let $range = $("#price-range"),
  $inputFrom = $(".price-range-from"),
  $inputTo = $(".price-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

priceSlider();

function widthSlider(){
  let $range = $("#width-range"),
  $inputFrom = $(".width-range-from"),
  $inputTo = $(".width-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

widthSlider();

function heightSlider(){
  let $range = $("#height-range"),
  $inputFrom = $(".height-range-from"),
  $inputTo = $(".height-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

heightSlider();


function deepSlider(){
  let $range = $("#deep-range"),
  $inputFrom = $(".deep-range-from"),
  $inputTo = $(".deep-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

deepSlider();


// range mobile

function priceSliderMob(){
  let $range = $("#price-range1"),
  $inputFrom = $(".price-range-from"),
  $inputTo = $(".price-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

priceSliderMob();

function widthSliderMob(){
  let $range = $("#width-range1"),
  $inputFrom = $(".width-range-from"),
  $inputTo = $(".width-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

widthSliderMob();

function heightSliderMob(){
  let $range = $("#height-range1"),
  $inputFrom = $(".height-range-from"),
  $inputTo = $(".height-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

heightSliderMob();


function deepSliderMob(){
  let $range = $("#deep-range1"),
  $inputFrom = $(".deep-range-from"),
  $inputTo = $(".deep-range-to"),
  instance,
  min = 0,
  max = 180,
  from = 0,
  to = 0;

  $range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    onStart: updateInputs,
    onChange: updateInputs,
    grid: false,             // show/hide grid
    drag_interval: true,
    force_edges: true,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    block: false            // block instance from changing
});

instance = $range.data("ionRangeSlider");

function updateInputs (data) {
from = data.from;
  to = data.to;
  
  $inputFrom.prop("value", from);
  $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < min) {
      val = min;
  } else if (val > to) {
      val = to;
  }
  
  instance.update({
      from: val
  });
});

$inputTo.on("input", function () {
  var val = $(this).prop("value");
  
  // validate
  if (val < from) {
      val = from;
  } else if (val > max) {
      val = max;
  }
  
  instance.update({
      to: val
  });
});

}

deepSliderMob();

// range mobile


// slider cart

$('.cart-slider-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  infinite: false,
  fade: true,
  asNavFor: '.cart-slider__thumb'
});

$('.cart-slider__thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  infinite: false,
  asNavFor: '.cart-slider-main',
  focusOnSelect: true,
  prevArrow: $('.cart-slider-nav__prev'),
  nextArrow: $('.cart-slider-nav__next'),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        vertical: false
      }
    }
  ]
});

// gallery slider

$('.gallery-cart__slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  focusOnSelect: true,
  prevArrow: $('.gallery-cart__body-prev'),
  nextArrow: $('.gallery-cart__body-next'),
  responsive: [
    {
      breakpoint: 1228,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

// color option

$('.options-color__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  prevArrow: $('.options-color__prev'),
  nextArrow: $('.options-color__next'),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
});


// filter block 

$(".filter-block__title.toggle").click(function(e){
  e.preventDefault();
  $(this).toggleClass('active').next().slideToggle();
});



// collect select
$(".btn-select").click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});


// collect composition slider
$('.composition-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  focusOnSelect: true,
  prevArrow: $('.composition-slider__prev'),
  nextArrow: $('.composition-slider__next'),
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

// показать больше

const txt = document.querySelector(".page-text__body-wrapper");
const txtInitialHeight = 96;
const overflow = document.querySelector(".overflow");
const btn = document.querySelector(".toggle-more");

btn.addEventListener("click", initToggle);

function initToggle(e) {
  e.preventDefault();
  txt.style.maxHeight =
    e.target.dataset.state === "more"
      ? `${txt.scrollHeight}px`
      : `${txtInitialHeight}px`;
  e.target.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "less" : "more"
  );
  e.target.innerHTML =
    e.target.dataset.state === "more" ? "Подробнее" : "скрыть";
  overflow.setAttribute(
    "data-state",
    e.target.dataset.state === "more" ? "visible" : "hidden"
  );
}


// mobile filter block
$("#filter-btn-mobile").click(function(e){
  e.preventDefault();
  $('body').addClass('lock');
  $('.mobile-filter-menu').toggleClass('active');
});

$(".filter-title-main .close").click(function(e){
  e.preventDefault();
  $('body').removeClass('lock')
  $('.mobile-filter-menu').removeClass('active');
});

$(".filter-block__item").click(function(e){
  e.preventDefault();
  $('.filter-body').addClass('lock');
  $(this).next('.filter-block__wrapper').addClass('active');
});


$(".filter-block__title .back").click(function(e){
  e.preventDefault();
  $(this).closest(".filter-block__wrapper").removeClass('active');
  $('.filter-body').removeClass('lock');
});
