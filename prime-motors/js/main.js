$(document).ready(function () {
    $('.comments-slider').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1,
                margin: 5,
            },
            550: {
                items: 2,
                margin: 10,
            },
            960: {
                items: 3,
            },
        },
        // autoplay: true,
        // autoplayTimeout: 5000
    });

    $('.brands-slider').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 2,
                center: false,
            },
            550: {
                items: 3,
                center: false,
            },
            960: {
                items: 5,
            },
        }
    });

    // текст в комментариях 

    $('.more-btn').on("click", function (e) {
        e.preventDefault();
        let par =  $(this).parent('.comments-slider__item').parent('.owl-item');
        par.toggleClass('showContent');
        // par.toggleClass('centerMode');
        var raplaceText = par.hasClass('showContent') ? "Скрыть текст" : "Читать больше";
        $(this).text(raplaceText);
    });

    $('#request-form').on("click", function (e) {
        e.preventDefault();
        $('.request-body').toggleClass('formSend');
    });
    
    $('#send-more').on("click", function (e) {
        e.preventDefault();
        $('.request-body').toggleClass('formSend');
    });

    // сервис слайды 
    
    $('.service-slider__body').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1.2,
                margin: 20,
                center: false,
            },
            550: {
                items: 2,
                center: false,
            },
            960: {
                items: 3,
            },
        }
    });

    // удалить слайдер

    $(window).on('load resize', function () {
        if ($(this).width() < 768) {
          $(".comfort-slider").trigger('destroy.owl.carousel');
          $('.comfort-slider').removeClass('owl-carousel');
        } else {
            $('.comfort-slider').addClass('owl-carousel');
            $('.comfort-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
                responsive: {
                    0: {
                        items: 3,
                    },
                    960: {
                        items: 4,
                    },
                }
            });
        }
      })
    // удалить слайдер
    
    // список услуг кнопка
    $('.serv-list__btn').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $(this).parent().next('.sub-item').slideToggle();
    });
    
    // slider comfort


    // mobile menu

    $('.drp-down-link').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $(this).next('ul').toggle();
    });

    $('.mobile-nav__burger').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('html').addClass('block');
        $('body').append('<div class="modal-backdrop fade show menu-fade"></div>');
    });

    $('.modal-backdrop.menu-fade').on("click", function (e) {
        $(".modal-backdrop").remove();
    });

    $('.btn-close-menu').on("click", function (e) {
        e.preventDefault();
        $('.mobile-nav__burger').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
        $('html').removeClass('block');
        $(".modal-backdrop").remove();
    });

    $('body').on('click', '.modal-backdrop', function(e) {
         $('.mobile-nav__burger').removeClass('active');
        $('.mobile-menu').removeClass('active');
        $('html').removeClass('block');
        $(".modal-backdrop").remove();
        e.preventDefault();
    })

    // modal
    $('.mobile-nav__phone').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.contact-us-modal').toggleClass('active');
    });
    $('.contact-us-modal__close').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.contact-us-modal').toggleClass('active');
    });


    // search
    $('.mobile-search .form-control').focus(function() {
        $('.mobile-search').addClass('active');
        $('.mobile-nav__back').addClass('active');
        $('.mobile-nav__burger').addClass('hide');
        $('.mobile-nav__basket').addClass('hide');
        $('.search-button').addClass('active');
        $('.close-button').addClass('active');
    });

    $('.mobile-nav__back').on("click", function () {
        $('.mobile-search').removeClass('active');
        $('.mobile-nav__back').removeClass('active');
        $('.mobile-nav__burger').removeClass('hide');
        $('.mobile-nav__basket').removeClass('hide');
        $('.search-button').removeClass('active');
        $('.close-button').removeClass('active');
        $('.search-list').removeClass('active');
    });
    $('.close-button').on("click", function (e) {
        e.preventDefault();
        $('input').val('');
    });

    // modal
    $('.modal-req-btn').on("click", function (e) {
        e.preventDefault();
        $('#modal-req').modal('toggle');
        $('#modal-thx').modal('toggle');
    });


    // repair slider

    $('.repair-description__slider').owlCarousel({
        // center: true,
        // loop: true,
        dots: false,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 3,
            },
            768: {
                items: 3,
            },
            960: {
                items: 6,
            },
        }
    });

    // road slider

    $(window).on('load resize', function () {
        if ($(this).width() < 769) {
          $(".road-slider").trigger('destroy.owl.carousel');
          $('.road-slider').removeClass('owl-carousel');
          if ($('.road-slider__item').length > 3) {
            $('.road-slider__item:gt(2)').hide();
          }
        } else {
            $('.road-slider').addClass('owl-carousel');
            $('.road-slider').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
                responsive: {
                    0: {
                        items: 3,
                    },
                    960: {
                        items: 3,
                    },
                }
            });
        }
      })


    //   show more road
      
    
    $('#show-more-road').on('click', function() {
        //toggle elements with class .ty-compact-list that their index is bigger than 2
        $('.road-slider__item:gt(2)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === 'Скрыть' ? $(this).text('Показать больше') : $(this).text('Скрыть');
    });


    // поиск
    $('.mobile-search #search').keyup(function(){
            $('.search-list').addClass('active');
    });
    
});

