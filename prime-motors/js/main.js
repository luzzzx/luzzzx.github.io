$(document).ready(function () {
    $('.comments-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 2,
            },
            960: {
                items: 3,
            },
        },
        autoplay: true,
        autoplayTimeout: 5000
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
                items: 1,
            },
            550: {
                items: 3,
            },
        }
    });

    // список услуг кнопка
    $('.serv-list__btn').on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active')
        $(this).parent().next('.sub-item').slideToggle();
    });
    
    // slider comfort

    $('.comfort-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText : ['<span class="icon-prev"></span>','<span class="icon-next"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            550: {
                items: 4,
            },
        }
    });


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
    });
    $('.btn-close-menu').on("click", function (e) {
        e.preventDefault();
        $('.mobile-nav__burger').toggleClass('active');
        $('.mobile-menu').toggleClass('active');
    });


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
        $('.form-search_isearch').hide();
        $('.form-search_iclose').show();
    });
    $('.mobile-nav__back').focus(function() {
        $('.mobile-search').removeClass('active');
        $('.mobile-nav__back').removeClass('active');
        $('.mobile-nav__burger').removeClass('hide');
        $('.mobile-nav__basket').removeClass('hide');
        $('.form-search_isearch').show();
        $('.form-search_iclose').hide();
    });
});

