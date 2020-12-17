$(function () {
	$('.catalog-page .filter-row .filter-view .view').on('click', function () {
		$('.catalog-page .filter-row .filter-view .view').removeClass('active');
		$('.catalog-page .items-table').removeClass('active');
		$('.' + $(this).attr('data-switch') + '-table').addClass('active');
		$(this).addClass('active');
	});

	$('.catalog-page .items .item .like').on('click', function () {
		var src = $(this).find('img').attr('src'),
			toggleSrc = $(this).find('img').attr('data-img');
		$(this).find('img').attr('src', toggleSrc);
		$(this).find('img').attr('data-img', src);
	});

	$(document).mouseup(function(e) {
		var container = $('.popup-info');

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.stop().fadeOut();
		}
	});
	$('.popup-info .close-btn').on('click', function () {
		$('.popup-info').stop().fadeOut();
	});
	$('.info-btn').on('click', function (e) {
		e.stopPropagation();
		$(this).parents('.table_row_search').find('.popup-info').stop().fadeIn();
	});
	
	$('.info-btn').on('click', function (e) {
		e.stopPropagation();
		$(this).next('.popup-info').stop().fadeIn();
	});

	$('.catalog-page .filter-select .select').on('click', function () {
		$(this).parent().find('.select-menu').css('display', 'flex');
	});
	$('.catalog-page .filter-select .filter-option').on('click', function (e) {
		e.preventDefault();
		$(this).parent().find('.filter-option').removeClass('active');
		$(this).addClass('active');
		$(this).closest('.wrapper').find('.select').html($(this).html());
		$(this).parents('.select-menu').hide();
	});

	$(document).mouseup(function (e) {
		var container = $('.catalog-page .filter-select .select-menu');

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
	});

	$('.catalog-page .heart-btn').on('click', function (e) {
		e.stopPropagation();
	});
	$('.catalog-page .table_row_search').on('click', function (e) {
		if ($(window).width() < 1367) {
			$(this).find('.toggle-desc').slideToggle();
		}
		if ($(window).width() < 575) {
			$(this).find('.col-term').slideToggle();
			$(this).find('.col-availability').slideToggle();
		}
	});

	var catalogList = $('.catalog-page .catalog-list');
	if (catalogList.length > 0) {
		$('.catalog-page .catalog-list').slick({
			infinite: false,
			slidesToScroll: 3,
			slidesToShow: 5.4,
			prevArrow: '<button class="prev-arrow"><img src="./img/catalog-left-arrow.png" alt=""></button>',
			nextArrow: '<button class="next-arrow"><img src="./img/catalog-right-arrow.png" alt=""></button>',
			responsive: [
				{
					breakpoint: 1367,
					settings: {
						slidesToShow: 7.5,
						slidesToScroll: 1,
						prevArrow: '<button class="prev-arrow"><img src="./img/catalog-left-arrow.png" alt=""></button>',
						nextArrow: '<button class="next-arrow"><img src="./img/catalog-right-arrow.png" alt=""></button>',
					}
				},
				{
					breakpoint: 1201,
					settings: {
						slidesToShow: 5.5,
						slidesToScroll: 1,
						prevArrow: '<button class="prev-arrow"><img src="./img/catalog-left-arrow.png" alt=""></button>',
						nextArrow: '<button class="next-arrow"><img src="./img/catalog-right-arrow.png" alt=""></button>',
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4.62,
						slidesToScroll: 1,
						prevArrow: '<button class="prev-arrow"><img src="./img/catalog-left-arrow.png" alt=""></button>',
						nextArrow: '<button class="next-arrow"><img src="./img/catalog-right-arrow.png" alt=""></button>',
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 4.62,
						slidesToScroll: 1,
						prevArrow: '<button class="prev-arrow"><img src="./img/catalog-left-arrow.png" alt=""></button>',
						nextArrow: '<button class="next-arrow"><img src="./img/catalog-right-arrow.png" alt=""></button>',
					}
				},
				{
					breakpoint: 576,
					settings: 'unslick'
				}
			]
		});
	}
});