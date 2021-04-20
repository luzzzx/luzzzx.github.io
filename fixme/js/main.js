$(document).ready(function () {
    function setDots(){
        $(".cards-slider-body .owl-dots").removeClass('disabled');
    }
    $('.cards-slider-body').owlCarousel({
        loop:true,
        margin:16,
        dots: true,
        items:4,
        nav:false,
        dotsEach: true,
        responsive:{
            0:{
                items:1,
                dotsEach: false,
                stagePadding: 50,  
                singleItem: true
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        },
        onInitialized:setDots,
        onChanged:setDots
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

    $('#request-app').submit(function (e) { 
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

    // trouble shooting windows

    $('.trouble-shoot').click(function(e) {
        e.preventDefault();
        let troubleVar = $(this).attr('data-windows');
        $(this).parent().hide();
        $('.price-tab-problem').find(`.problem-window[data-windows=${troubleVar}]`).addClass("active");
    });

    $('.btn-back').click(function(e) {
        e.preventDefault();
        $(this).parent().removeClass("active");
        $('.problem-body__row').show();
    });

    $('.second-lvl').click(function(e) {
        e.preventDefault();
        let troubleVar = $(this).parent().attr('data-windows');
        $(this).parent().removeClass("active");
        $(this).parents().find(`.problem-window[data-windows=${troubleVar}]`).addClass('active');
    });

    $('.custom-switch input:checkbox').change(function(){
        if($(this).is(":checked")) {
            $(this).parent().next('.btn-add-trouble').show();
        } else {
            $(this).parent().next('.btn-add-trouble').hide();
        }
    });

    $('.btn-next').click(function(e) {
        e.preventDefault();
        $(this).parents('.problem-window').removeClass('active');
        $(this).parents('.problem-window').next(".problem-window-final").addClass("active");
    });

    $('.filter-btn').click(function(e) {
        e.preventDefault();
       $('.filter-nav').toggleClass('active');
       $('<div class="modal-backdrop fade show filter"></div>').appendTo(document.body);

       $('.filter').click(function(e) {
        e.preventDefault();
            $('.filter-nav').removeClass('active');
            $('.filter').remove();
        });
    });

    // фильтр 
    
    $('#btn-apply').click(function(e) {
        e.preventDefault();
        let inputId,
            blogTag;
        $("input:radio[name=filter-check]:checked").each(function () {
            inputId = $(this).attr("id");
        });

        $(".blog-item").each(function () {
            blogTag = $(this).attr("data-tag");
            if(blogTag === inputId){
                $(this).show();
            } else{
                $(this).hide();
            }
        });

        $(this).parent().removeClass('active');
        $('.modal-backdrop').remove();
    });

});