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

  // filter toggler
  $('.filter-mobile-toggler').on("click", function (e) {
    e.preventDefault();
    $('.catalog-page-filter').slideToggle();
  });


  // catalog slider
//   $(".catalog-range-slider").ionRangeSlider({
//     skin: "round",
//     type: "double",
//     grid: false,             // show/hide grid
//     drag_interval: true,
//     force_edges: true,     // force UI in the box
//     hide_min_max: true,    // show/hide MIN and MAX labels
//     hide_from_to: true,    // show/hide FROM and TO labels
//     block: false            // block instance from changing
// });

  // catalog slider capacity
function capacitySlider(){
  let $range = $("#capacity-range"),
  $inputFrom = $(".capacity-range-from"),
  $inputTo = $(".capacity-range-to"),
  instance,
  min = 0,
  max = 500,
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

capacitySlider();

// priceSlider

function priceSlider(){
  let $range = $("#price-range"),
  $inputFrom = $(".price-range-from"),
  $inputTo = $(".price-range-to"),
  instance,
  min = 0,
  max = 10000,
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
});