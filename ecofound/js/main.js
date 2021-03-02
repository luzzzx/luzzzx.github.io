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
      breakpoint: 1290,
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

$(function() {
  
  //FILTER BY TAG
  $('.filter').on( 'click', function(e) {
      e.preventDefault();
    
      //Get filter data from active link
      var filterValue = $(this).attr('data-filter');
    
      //Show filtered list by matching data-filter with class of item
      if(filterValue == "all") {
        $(".cards-content .e-card").fadeIn('slow');
      } else {
        $(".cards-content .e-card").not("." + filterValue).hide().parent().removeClass('active');
        $("." + filterValue).fadeIn('slow').parent().addClass('active');
      }
  });
  

});


$(function() {
  
  'use strict';

  $('.input-file').each(function() {
    var $input = $(this),
        $label = $input.next('.js-labelFile'),
        labelVal = $label.html();
    
   $input.on('change', function(element) {
      var fileName = '';
      if (element.target.value) fileName = element.target.value.split('\\').pop();
      fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
   });
  });

});

$( ".round-btn" ).mousemove(function( event ) {
  var msg;
  msg = 'rotate' + '(' + ((event.pageX + event.pageY) + 'deg') + ')';
  console.log(msg);
  $('.round-main').css({'transform': msg});
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



  