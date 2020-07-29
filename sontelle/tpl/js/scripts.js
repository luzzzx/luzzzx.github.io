var animate = false;
var wScroll;
var scrollTop;

$(document).ready(function () {
	wscr();
	mobmenu();
	mobsliders();
	carousels();

	$(".modal").on('show.bs.modal', function () {
		$(".topline").css("margin-right", wScroll + "px");
	});

	$(".modal").on('hidden.bs.modal', function () {
		$(".topline").css("margin-right", "0");
	});

	$('[data-toggle="tooltip"]').tooltip({
		'placement': 'top auto',
		'trigger': 'hover',
		'offset': '50 50',
		'html': true
	});

	if ($("*").is("input[type='tel']")) {
		$("input[type='tel']").inputmask("+7(999)-999-99-99", { showMaskOnHover: true });
	}

	if ($("*").is(".numeric")) {
		$(".numeric").inputmask("9{0,7}");
	}

	var wrapper = $(".navigation > container > ul");
	$('> li', wrapper).detach().map(function () {
		return [this, document.createTextNode(" ")];
	}).appendTo(wrapper);

	var wrapper = $(".footer .footer-sections");
	$('.section', wrapper).detach().map(function () {
		return [this, document.createTextNode(" ")];
	}).appendTo(wrapper);

	$('.dropdown').on('show.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').first().stop(true, true).animate({
			opacity: 'toggle'
		}, 300);

		if (($(this).hasClass("dropdown-nav")) && ($("body").width() <= 1199)) {
			$(".mobmenu-toggle").css("opacity", 0);
			setTimeout(function () {
				$(".mobmenu-toggle").addClass("hide");
			}, 300);
		}
	});

	$('.dropdown').on('hide.bs.dropdown', function (e) {
		$(this).find('.dropdown-menu').first().stop(true, true).animate({
			opacity: 'toggle'
		}, 300);

		$(".mobmenu-toggle").removeClass("hide");
		setTimeout(function () {
			$(".mobmenu-toggle").css("opacity", 1);
		}, 100);
	});

	$(document).on("click.bs.dropdown.data-api", ".dropdown, .modal", function (e) {
		e.stopPropagation();
	});

	$(".out").on("click", ".mobmenu-toggle", function (event) {
		event.preventDefault();
		if (!animate) {
			animate = true;
			$(this).toggleClass("active");
			if ($(this).hasClass("active")) {
				$(".mobmenu").addClass("open");
				$(".mobmenu").addClass("sliders");
				$("body").addClass("openmenu");
				$(".openmenu").css("padding-right", wScroll + "px");
				$(".topline").css("margin-right", wScroll + "px");
				setTimeout(function () {
					$(".mobmenu").addClass("showcontent");
					setTimeout(function () {
						animate = false;
					}, 500);
				}, 500);
			}
			else {
				$(".mobmenu").removeClass("showcontent");
				setTimeout(function () {
					$(".mobmenu").removeClass("sliders");
					setTimeout(function () {
						$(".mobmenu").removeClass("open");
						$(".openmenu").css("padding-right", "0px");
						$(".topline").css("margin-right", "0px");
						$("body").removeClass("openmenu");
						animate = false;
					}, 500);
				}, 500);
			}
		}
	});

	$(".scroll").click(function () {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top - $(".topline").outerHeight();
		$("body,html").animate({ scrollTop: destination }, 700);
		return false;
	});

	$(".product-detail").on("click", ".link a", function (event) {
		$(".tab-reviews").tab("show");
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top + parseInt($(elementClick).height()) + 2;
		$("body,html").animate({ scrollTop: destination }, 700);
		return false;
	});

	if ($("*").is(".banners")) {
		var countBanners = $(".banners .banner").length;
		$(".banners-carousel").slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			dots: (countBanners > 3) ? true : false,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						dots: (countBanners > 2) ? true : false,
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						dots: (countBanners > 1) ? true : false,
						slidesToShow: 1,
						arrows: false
					}
				}
			]
		});
	}

	$('.products a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var products = $('.products .tab-content ' + $(this).attr("href")).find(".products-list");
		if ($(products).hasClass("slider")) {
			products.slick("setPosition");
		}

		itemHeights(products.find(".product .product-header"));
		itemHeights(products.find(".product .product-body"));
		itemHeights(products.find(".product .product-footer"));
	});

	$('.articles a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var articles = $('.articles .tab-content ' + $(this).attr("href")).find(".articles-list");
		if ($(articles).hasClass("slider")) {
			articles.slick("setPosition");
		}

		itemHeights(articles.find(".article .article-name"));
		itemHeights(articles.find(".article .article-meta"));
		itemHeights(articles.find(".article .article-text"));
	});

	$(".mobmenu").on("click", ".dropdown .close", function (event) {
		$('.mobmenu  .dropdown-toggle').dropdown('toggle');
	});

	if ($("*").is(".filter .uislider")) {
		$('.filter .uislider .uislider-container').each(function () {
			var slider = $(this);
			$(this).slider({
				range: true,
				step: slider.data("step"),
				min: slider.data("min"),
				max: slider.data("max"),
				values: [slider.data("min"), slider.data("max")],
				slide: function (event, ui) {
					for (var i = 0; i < ui.values.length; i++) {
						slider.parents(".uislider").find("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
					}
				}
			});
		});

		$("input.sliderValue").change(function () {
			$(this).parents(".uislider").find(".uislider-container").slider("values", $(this).data("index"), $(this).val());
		});
	}

	if ($("*").is(".product-detail .uislider")) {
		$('.product-detail .uislider .uislider-container').each(function () {
			var slider = $(this);
			$(this).slider({
				range: "min",
				step: slider.data("step"),
				min: slider.data("min"),
				max: slider.data("max"),
				value: (slider.data("max") + slider.data("min")) / 2,
				create: function () {
					slider.parents(".uislider").find(".ui-slider-handle span").text($(this).slider("value"));
				},
				slide: function (event, ui) {
					slider.parents(".uislider").find(".ui-slider-handle span").text(ui.value);
				}
			});
		});
	}

	$(".filter").on("click", ".all a", function (event) {
		event.preventDefault();
		$(this).toggleClass("open");
		if ($(this).hasClass("open")) {
			$(this).find("span").text("Скрыть часть");
			$(this).parents(".filter-section").find(".list li:nth-child(n+7)").show(0);
		} else {
			$(this).find("span").text("Показать все");
			$(this).parents(".filter-section").find(".list li:nth-child(n+7)").hide(0);
		}
	});

	$(".filter").on("click", ".has-list .heading", function (event) {
		event.preventDefault();

		if ($(this).parents(".page").hasClass("vacancies")) {
			return false;
		}

		$(this).parents('.filter-section').toggleClass("up");
		$(this).parents('.filter-section').find(".list").stop(true, true).animate({
			opacity: 'toggle',
			height: 'toggle'
		}, 300);
	});

	$(".catalog, .vacancies").on("click", ".filter-toggle, .filter .close", function (event) {
		event.preventDefault();

		$('.filter').css("overflow", "hidden");
		$('.filter').stop(true, true).animate({
			opacity: 'toggle',
		}, 300);

		$(".filter").toggleClass("open");
		if ($(".filter").hasClass("open")) {
			scrollDoc = $(document).scrollTop();
			setTimeout(function () {
				$("body").addClass("openmenu");
				$(".openmenu").css("padding-right", wScroll + "px");
				$('.filter').css("overflow", "auto");
			}, 300);
		} else {
			$(".openmenu").css("padding-right", "0px");
			$("body").removeClass("openmenu");
			$(document).scrollTop(scrollDoc);
		}
	});

	if ($("*").is(".product-detail")) {
		var countSlides = $(".product-detail .thumb").length;
		$(".product-detail .images-thumbs").slick({
			slidesToShow: (countSlides > 5) ? 3 : 5,
			slidesToScroll: 1,
			focusOnSelect: true,
			centerMode: (countSlides > 5) ? true : false,
			centerPadding: (countSlides > 5) ? "70px" : "0px",
			arrows: true,
			vertical: true,
			verticalSwiping: true,
			asNavFor: '.images-slides',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						centerPadding: (countSlides > 5) ? "60px" : "0px",
					}
				},
				{
					breakpoint: 480,
					settings: {
						centerPadding: (countSlides > 5) ? "50px" : "0px",
					}
				}
			]
		});

		$(".product-detail .images-slides").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			asNavFor: '.images-thumbs'
		});
	}

	if ($("*").is("select")) {
		$("select").selectmenu();
		$(".ui-selectmenu-menu").addClass("mCustomScrollbar");
	}

	$(".selectphoto").click(function () {
		$(this).parents("form").find("#photo").click();
		return false;
	});

	$(".selectfile").click(function () {
		$(this).parents("form").find("#file").click();
		return false;
	});

	if ($("*").is(".moveblock")) {
		var a = document.querySelector('.moveblock'), b = null, P = $(".topline").outerHeight();  // если ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента. Может быть отрицательным числом
		window.addEventListener('scroll', Ascroll, false);
		window.addEventListener('load', Ascroll, false);
		window.addEventListener('resize', Ascroll, false);
		document.body.addEventListener('scroll', Ascroll, false);
		function Ascroll() {
			if (b == null) {
				var Sa = getComputedStyle(a, ''), s = '';
				for (var i = 0; i < Sa.length; i++) {
					if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
						s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
					}
				}
				b = document.createElement('div');
				b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
				a.insertBefore(b, a.firstChild);
				var l = a.childNodes.length;
				for (var i = 1; i < l; i++) {
					b.appendChild(a.childNodes[1]);
				}
				a.style.height = b.getBoundingClientRect().height + 'px';
				a.style.padding = '0';
				a.style.border = '0';
			}
			var Ra = a.getBoundingClientRect(),
				R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector('.container-move').getBoundingClientRect().bottom);  // селектор блока, при достижении верхнего края которого нужно открепить прилипающий элемент;  Math.round() только для IE; если ноль заменить на число, то блок будет прилипать до того, как нижний край элемента дойдёт до футера
			if ((Ra.top - P) <= 0) {
				if ((Ra.top - P) <= R) {
					b.className = 'stop';
					b.style.top = - R + 'px';
				} else {
					b.className = 'sticky';
					b.style.top = P + 'px';
				}
			} else {
				b.className = '';
				b.style.top = '';
			}
			window.addEventListener('resize', function () {
				a.children[0].style.width = getComputedStyle(a, '').width
			}, false);
		}
	};

	$(".modal-colors").on("click", ".control", function (event) {
		event.preventDefault();
		$(this).parents(".section-select").toggleClass("open");
		$(this).parents(".section-select").find(".menu").fadeToggle(50);
	});

	$(document).mouseup(function (e) {
		var div = $(".modal-colors .menu");

		if (!div.is(e.target) && div.has(e.target).length === 0 && !$(e.target).parents(".section-select").hasClass("open")) {
			$(".modal-colors .section-select").removeClass("open");
			$(".modal-colors .section-select .menu").fadeOut(50);
		}
	});


	$(".modal-colors").on("click", ".variants-colors .section-content li a", function (event) {
		event.preventDefault();
		var img = $(this).data("img");
		var color = $(this).data("color");
		var material = $(this).data("material");
		var price = $(this).data("price");

		$(".modal-colors .variants-colors .section-content li").removeClass("active");
		$(this).parent("li").addClass("active");

		$(".modal-colors .selected-image").addClass("transparent");
		setTimeout(function () {
			$(".modal-colors .selected-image").css("background", "url(" + img + ")");
			$(".modal-colors .selected .selected-name, .modal-colors .selected .selected-option .color").text(color);
			$(".modal-colors .selected .selected-option .material").text(material);
			$(".modal-colors .selected .price").text(price);

			$(".modal-colors .selected-image").removeClass("transparent");
		}, 300);
	});

	if ($("*").is(".comparison")) {
		$(".comparison-items").slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			appendArrows: '.comparison-controls',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	heights();
	itemHeightsAll();
});

$(window).load(function () {
	wscr();
	mobsliders();
	itemHeightsAll();
});

$(window).resize(function () {
	if ($("*").is("select")) {
		$("select").selectmenu("close");
	}

	setTimeout(function () {
		wscr();
		heights();
		mobsliders();
		itemHeightsAll();
	}, 600);
});

function wscr() {
	if ($(document).height() > $(window).height()) {
		var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
			indicator = $('<div>').css({ 'height': '200px' });

		$('body').append(block.append(indicator));
		var w1 = $('div', block).innerWidth();
		block.css('overflow-y', 'scroll');
		var w2 = $('div', block).innerWidth();
		$(block).remove();
		wScroll = w1 - w2;
	}
	else {
		wScroll = 0;
	}
}

function mobmenu() {
	$(".out").append('<div class="mobmenu"><div class="container"></div></div>');
	$(".mobmenu > .container").append('<div class="mobmenu-search">' + $(".header .header-search").html() + '</div>');
	$(".mobmenu > .container").append('<div class="mobmenu-navigation">' + $(".navigation .container").html() + '</div>');
	$(".mobmenu .mobmenu-navigation .dropdown-menu .container").append('<a href="#" class="close">Назад к меню</a>');
	$(".mobmenu > .container").append('<div class="additionally"><div class="wrapper"></div></div>');
	$(".mobmenu .additionally .wrapper").append('<div class="mobmenu-links">' + $(".topline .topline-menu").html() + '</div>');
	$(".mobmenu .additionally .wrapper").append('<div class="mobmenu-callback">' + $(".header .header-callback").html() + '</div>');
	$(".mobmenu .additionally .wrapper").append('<div class="mobmenu-phones">' + $(".header .header-phones").html() + '</div>');
}

function heights() {
	if (!$(".mobmenu-search .text").is(":focus")) {
		$(".mobmenu-navigation").css("height", $(window).height() - parseInt($(".mobmenu .container").css("padding-top")));
		$(".mobmenu .additionally").css("height", $(window).height() - parseInt($(".mobmenu .container").css("padding-bottom")));
	}

	$(".franchise .retail .item-content, .franchise .dealers .item-content").css("min-height", $(".franchise .other").outerHeight() - $(".franchise .other .item-name").innerHeight());

	$(".filter").css("min-height", $(".filter").closest(".row").outerHeight());
};

function itemHeightsAll() {
	if ($("*").is(".products")) {
		$('.products .products-list').each(function () {
			itemHeights($(this).find(".product .product-header"));
			itemHeights($(this).find(".product .product-body"));
			itemHeights($(this).find(".product .product-footer"));
		});
	}

	if ($("*").is(".articles")) {
		$('.articles .articles-list').each(function () {
			itemHeights($(this).find(".article .article-name"));
			itemHeights($(this).find(".article .article-meta"));
			itemHeights($(this).find(".article .article-text"));
		});
	}

	if ($("*").is(".comparison")) {
		$(".comparison .eqheights > div").css("height", "auto");

		$(".comparison .keys > div").each(function (i) {
			elem = $(".comparison .eqheights").find("> div:eq(" + i + ")");
			itemHeights(elem);
		});
	}
}

function itemHeights(item) {
	var maxHeight = 0;
	$(item).css("height", "auto");
	$(item).each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	$(item).height(maxHeight + 1);
}

function mobsliders() {
	if ($("*").is(".mobcarousel")) {
		$('.mobcarousel').each(function () {
			slider(this);
		});
	}
}

function carousels() {
	if ($("*").is(".carousel")) {
		$('.carousel').each(function () {
			carousel(this);
		});
	}
}

function slider(item) {
	if (($("body").width() <= 1199) && (!$(item).hasClass("slider"))) {
		$(item).addClass("slider");
		var countSlides = $(item).find(".mobslide").length;
		$(item).slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			arrows: false,
			dots: (countSlides > 4) ? true : false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						dots: (countSlides > 3) ? true : false,
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 992,
					settings: {
						dots: (countSlides > 2) ? true : false,
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						dots: (countSlides > 1) ? true : false,
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}

	if (($("body").width() > 1199) && ($(item).hasClass("slider"))) {
		$(item).removeClass("slider");
		$(item).slick('unslick');
	}
}

function carousel(item) {
	var countSlides = $(item).find(".slide").length;
	$(item).slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: false,
		dots: (countSlides > 4) ? true : false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: (countSlides > 3) ? true : false,
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 992,
				settings: {
					dots: (countSlides > 2) ? true : false,
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 481,
				settings: {
					dots: (countSlides > 1) ? true : false,
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
}

function getName(str) {
	if (str != "") {
		$(".selectphoto").addClass("selected");
	}
	else {
		$(".selectphoto").removeClass("selected");
	}
}

function getNameFile(str) {
	if (str != "") {
		$(".selectfile").addClass("selected");
	}
	else {
		$(".selectfile").removeClass("selected");
	}
}

if ($("*").is(".map")) {
	ymaps.ready(function () {
		var addressMap = new ymaps.Map('map', {
			center: [55.738662, 37.651169],
			zoom: 12,
			controls: ["zoomControl"]
		}, {
			suppressMapOpenBlock: true
		}),
			myPlacemark = new ymaps.Placemark(addressMap.getCenter(), {
				hintContent: 'Текст',
				balloonContent: 'Текст'
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'tpl/img/icons/mark.svg',
				iconImageSize: [35, 42],
				iconImageOffset: [-15, -25]
			});

		addressMap.behaviors.disable('scrollZoom');
		addressMap.geoObjects.add(myPlacemark);

		$(".modal-map").on('shown.bs.modal', function () {
			addressMap.container.fitToViewport();
		});

		$(".map").on("click", ".map-toggle", function (event) {
			$(".modal-map .map").toggleClass("full");
			addressMap.container.fitToViewport();
			return false;
		});
	});
}


/*
if($("*").is("#map")) {
	ymaps.ready(init);

	function init() {

	    // Создание экземпляра карты.
	    var myMap = new ymaps.Map('map', {
	            center: [55.738662, 37.651169],
	            zoom: 11
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        // Контейнер для меню.
	        menu = $('<ul></ul>');

	    myMap.behaviors.disable('scrollZoom');

	    for (var i = 0, l = addresses.length; i < l; i++) {
	        createMenuGroup(addresses[i]);
	    }

	    function createMenuGroup (group) {
	        // Пункт меню.
	        var menuItem = $('<li class="address"></li>'),
	        // Коллекция для геообъектов группы.
	        collection = new ymaps.GeoObjectCollection(null, { preset: group.style });

	        // Добавляем коллекцию на карту.
	        myMap.geoObjects.add(collection);
	        // Добавляем подменю.
	        for (var j = 0, m = group.items.length; j < m; j++) {
	            createSubMenu(group.items[j], collection, menu, j);
	        }
	    }

	    function createSubMenu (item, collection, submenu, j) {
	        // Пункт подменю.
	        var metro, addr, location, phone;
        	(typeof item.metro !== "undefined") ? metro = '<span class="metro">' + item.metro + '</span>' : metro = "";
        	(typeof item.address !== "undefined") ? addr = '<div class="address-addr"><a href="#">' + item.address + '</a>' + metro + '</div>' : addr = '<div class="address-addr"></div>';
        	(typeof item.location !== "undefined") ? location = '<div class="address-location">' + item.location + '</div>' : location = '<div class="address-location"></div>';
        	(typeof item.phone !== "undefined") ? phone = '<div class="address-phone">' + item.phone + '</div>' : phone = '<div class="address-phone"></div>';

	        var submenuItem = $('<li class="address">' + addr + location + phone + '</li>'),
	        // Создаем метку.
	        placemark = new ymaps.Placemark(item.center, { balloonContent: item.address}, {
	        	hideIconOnBalloonOpen: false,
	            // Опции.
	            // Необходимо указать данный тип макета.
	            iconLayout: 'default#image',
	            // Своё изображение иконки метки.
	            iconImageHref: 'tpl/img/icons/mark.svg',
	            // Размеры метки.
	            iconImageSize: [35, 42],
	            // Смещение левого верхнего угла иконки относительно
	            // её "ножки" (точки привязки).
	            iconImageOffset: [-17, -21],
	            iconIndex: j
	        });

			placemark.events
				.add('click', function (e) {
		            index = e.get('target').options.get('iconIndex');
		            $("#addresses li").removeClass("active");
		            $("#addresses li:eq(" + index + ")").addClass("active");
		        })
		        .add('balloonopen', function(e) {
			        placemark.options.set('iconImageHref', 'tpl/img/icons/mark.svg');
		        })
		        .add('balloonclose', function(e) {
			        placemark.options.set('iconImageHref', 'tpl/img/icons/mark.svg');
		        });

	        // Добавляем метку в коллекцию.
	        collection.add(placemark);
	        // Добавляем пункт в подменю.
	        submenuItem
	            .appendTo(submenu)
	            // При клике по пункту подменю открываем/закрываем баллун у метки.
	            .find('a')
	            .bind('click', function () {
	                if (!placemark.balloon.isOpen()) {
	                    placemark.balloon.open();
	                } else {
	                    placemark.balloon.close();
	                }

	                if($(this).parent("li").hasClass("active")) {
	                	$(this).parent("li").removeClass("active");
	                }
	                else {
		                $("#addresses li").removeClass("active");
		                $(this).parent("li").addClass("active");
		            }
	                return false;
	            });
	    }

	    // Добавляем меню в тэг BODY.
	    menu.appendTo($('#addresses'));
	}
}
*/