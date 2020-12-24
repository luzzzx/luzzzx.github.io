$(function () {

    const catalogSlickArrowLeft = '<button class="slick-arrow slick-prev"><img src="./img/slickArrowLeft.png" alt="Icon"></button>';
    const catalogSlickArrowRight = '<button class="slick-arrow slick-next"><img src="./img/slickArrowRight.png" alt="Icon"></button>';

    $('.parts_catalog').find('.parts_catalog__wrapper-content .parts_catalog__wrapper-content-slider').slick({
        slidesToShow: 5,
        rows: 3,
        prevArrow: catalogSlickArrowLeft,
        nextArrow: catalogSlickArrowRight,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    $('.burger').on('click', e => {
        const mobileMenu = $('.mobile-menu');
        if (mobileMenu.css('display') == 'none') {
            $(e.currentTarget).addClass('burger-active');
            mobileMenu.show(1).addClass('mobile-menu-active');
        } else {
            $(e.currentTarget).removeClass('burger-active');
            mobileMenu.removeClass('mobile-menu-active');
            setTimeout(() => {
                mobileMenu.hide();
            }, 500);
        }
    });

    $(document).on('mouseup', e => {
        const elem = $('.mobile-menu');
        const burger = $('.burger');
        if (!elem.is(e.target) && elem.has(e.target).length === 0 && !burger.is(e.target) && burger.has(e.target).length === 0) {
            burger.removeClass('burger-active');
            elem.removeClass('mobile-menu-active');
        }
    });

    $('footer').find('.list-title').on('click', e => {
        $(e.currentTarget).toggleClass('mobile-footer-menu-active');
        $(e.currentTarget).parent().toggleClass('mobile-footer-menu');
    });

    if($(window).width() < 1321) {
        $('.spare-parts-category').addClass('spare-parts-category-750');
    }
    if($(window).width() > 1321) {
        $('.spare-parts-category').removeClass('spare-parts-category-750');
    }

    $('.spare-parts-category-750').find('.spare-parts-category__content').slick({
        slidesToShow: 3,
        rows: 3,
        prevArrow: catalogSlickArrowLeft,
        nextArrow: catalogSlickArrowRight,
        responsive: [
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 2
                }
            },
        ]
    });

    $('.spare-parts-category').find('.sub-menu .icon').on('click', e => {
        $(e.currentTarget).parent().find('.sub-menu__list').fadeIn(200);
    });
    $('.spare-parts-category').find('.sub-menu .sub-menu__list .close').on('click', e => {
        $(e.currentTarget).parent().fadeOut(200);
    });

    $('.spare_parts-pop-up').find('.list .list__item .list__sub-link').on('click', e => {
        e.preventDefault();

        const currentTarget = $(e.currentTarget);

        currentTarget.siblings('.list-sub-menu').slideToggle(200);
        currentTarget.toggleClass('list__sub-link-active');
    });

    if($(window).width() < 1321) {
        $('.spare_parts-pop-up').find('.list .list__content').hide();
        $('.spare_parts-pop-up').find('.list .list__title').on('click', e => {
            $(e.currentTarget).siblings().slideToggle(200);
            $(e.currentTarget).toggleClass('list__title-active');
        });
    }
    $('.spare-parts-pop-up2, .spare-parts-pop-up3').find('.spare-parts-pop-up2__content, .spare-parts-pop-up3__content').slick({
        slidesToShow: 5,
        rows: 3,
        prevArrow: catalogSlickArrowLeft,
        nextArrow: catalogSlickArrowRight,
        responsive: [
            {
                breakpoint: 1321,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 761,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    rows: 5
                }
            },
        ]
    });

    $('.select-modification').find('.main-button-table').on('click', e => {
        $('.select-modification').find('.table-row-show-hide').show();
        $(e.currentTarget).hide();
    }) ;

    $('.select-modification').find('.main-button-mobile-table').on('click', e => {
        $('.select-modification').find('.mobile-table__item-show-hide').show();
        $(e.currentTarget).hide();
    });

    $('.select-mark-auto').find('.main-button').on('click', e => {
        const item = $('.select-mark-auto').find('.select-mark-auto__item-show-hide');

        if(item.is(':visible')) {
            item.hide();
            $(e.currentTarget).text('Показать больше');
        } else {
            item.show();
            $(e.currentTarget).text('Показать меньше');
        }
    });

    $('.car-list-card-togler').on('click', e => {
        e.preventDefault();
        $(e.currentTarget).next('ul').slideToggle();
    });

});