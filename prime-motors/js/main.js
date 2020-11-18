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
                items: 1,
            },
            550: {
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

});
