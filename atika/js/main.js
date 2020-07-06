$(document).ready(function () {
  if (parseInt($(window).width()) < 1000) {
    $(".advantages-cards__wrapp").addClass("owl-carousel");
    $(".faq-row").addClass("owl-carousel");
    $(".advantages-cards__wrapp").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      items: 1,
      dots: false
    });
    $(".faq-row").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      items: 1,
      dots: false
    });
  } else if (parseInt($(window).width()) > 1000) {
    $(".advantages-cards__wrapp").removeClass("owl-carousel");
    $(".faq-row").removeClass("owl-carousel");
  }

  // detail owlCarousel
  if (parseInt($(window).width()) < 650) {
    $(".detail-sameprod__cards").addClass("owl-carousel");
    $(".detail-sameprod__cards").owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      items: 1,
      dots: false
    });
  } else if (parseInt($(window).width()) > 650) {
    $(".detail-sameprod__cards").removeClass("owl-carousel");
  }


  $(".materials").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: true,
    responsive: {
      // breakpoint from 0 up
      650: {
        items: 2,
        dots: false
      },
      960: {
        items: 3,
      },
      450: {
        items: 2,
      },
    }
  });
  $(".new-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    dots: true,
    responsive: {
      // breakpoint from 0 up
      320: {
        items: 1,
        dots: false
      },
      700: {
        items: 2,
        dots: true,
        nav: true
      },
      1000: {
        items: 3,
        dots: true,
        nav: true
      },
      1240: {
        items: 4,
        dots: true,
        nav: true
      },
    }
  });
  $(".hits-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    dots: true,
    responsive: {
      // breakpoint from 0 up
      320: {
        items: 1,
        dots: false
      },
      700: {
        items: 2,
        dots: true,
        nav: true
      },
      1000: {
        items: 3,
      },
      1240: {
        items: 4,
      },
    }
  });
  $(".comments-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    items: 1,
    dots: true,
    responsive: {
      // breakpoint from 0 up
      320: {
        items: 1,
        dots: false
      },
      700: {
        items: 2,
        dots: true,
        nav: true
      },
      1000: {
        items: 3,
      },
      1240: {
        items: 4,
      },
    }
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: false,
    responsive: {
      // breakpoint from 0 up
      1151: {
        dots: true,
        nav: true,
      },
    }
  });

  // accord

  $(".accord-title").on("click", function () {
    $(".accord-title").each(function () {
      $(this).siblings(".accord-text")
        .slideUp(300).siblings(".accord-title").removeClass("active");
    });
    $(this)
      .next("div")
      .slideDown(300)
      .siblings(".accord-text")
      .slideUp(300);
    $(this)
      .addClass("active")
      .siblings(".accord-title")
      .removeClass("active");
  });

  // burger
  $(".burger-menu").on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('lock');
    $('.header-top__menu').toggleClass('active');
    $('.main-menu').toggleClass('active');
  })

  // choose-slider

  $('.detail-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.detail-slider',
    dots: false,
    centerMode: false,
    focusOnSelect: true
  });

});

// numbers
$(function () {

  $('input[type="number"]').niceNumber({

    // custom button text
    buttonDecrement: '',
    buttonIncrement: "",

  });



});