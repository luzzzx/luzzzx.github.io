$(document).ready(function () {
    $('.cards-slider-body').owlCarousel({
        loop:false,
        margin:16,
        dots: true,
        items:4,
        nav:false,
        dotsEach: true,
        responsive:{
            0:{
                items:1.4,
                dotsEach: false
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('.btn-more').click(function(e) {
        e.preventDefault();
        $(this).parent().find("[data-text=toggle]").toggleClass('active'); 
        $(this).toggleClass('active');
      });

    $('.burger-menu').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-nav').slideToggle();
    });  

    $('.choose-device').click(function(e) {
        e.preventDefault();
        $('.select').toggleClass('active');
        $('body').toggleClass('locked');
        $('html').toggleClass('locked');
    });
    $('.btn-close').click(function(e) {
        e.preventDefault();
        $('.select').toggleClass('active');
        $('body').toggleClass('locked');
        $('html').toggleClass('locked');
    });
    

    $('.select-body__row-item').click(function(e) {
        e.preventDefault();
        let atr = $(this).attr('data-target');
        $(atr).toggleClass('active');
    });

    $('.btn-model.back').click(function(e) {
       let num = $(this).attr('data-close');
       $(this).closest(`.${num}`).toggleClass('active');
    });


    // form app msg


    
    $('#order-cons').submit(function (e) { 
        e.preventDefault();
        $(".thx-msg").show().delay(2000).fadeOut();
    });


    // tabs label

    $('.price-tab-body input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
});