function mobile_filtre(obj){
	$('body').find('.filtre_fon').toggleClass('opened');
	$('body').find('.filter_mobile_overlay').toggleClass('opened');
	$('body').find('.filter_mobile_overlay').click(function(){mobile_filtre(obj)});
}

function toggleFilter(obj){
	$(obj).parents('[data-parent]').first().toggleClass('is--opened');
	$(obj).parents('[data-parent]').first().find('[data-body]').slideToggle(500);
}

function closeFilter() {
	$('body').find('[data-filter]').addClass('filter-closed').animate({maxWidth: '0%', flexBasis: '0%'}, {
		duration: 500,
		complete: function () {
			if ($('.catalog-page .catalog-list').length > 0) {
				$('.catalog-page .catalog-list').slick('slickSetOption', {
					slidesToShow: 7.5,
					slidesToScroll: 1
				}, true);
			}
			$('body').find('[data-filter]').toggle();
			$('body').find('[data-filter-show]').parent().toggle();
		}
	});
	$('body').find('[data-content]').animate({maxWidth: '100%', flexBasis: '100%'}, {
		duration: 500
	});
}

function showFilter(){
	$('body').find('[data-filter]').toggle().addClass('whiteSpace').removeClass('filter-closed');
	$('body').find('[data-filter-show]').parent().toggle();

	$('body').find('[data-filter]').animate({maxWidth: '25%', flexBasis: '25%'}, {
		duration: 500,
		complete: function () {
			if ($('.catalog-page .catalog-list').length > 0) {
				$('.catalog-page .catalog-list').slick('slickSetOption', {
					slidesToScroll: 3,
					slidesToShow: 5.5
				}, true);
			}
			$('body').find('[data-filter]').removeClass('whiteSpace')
		}
	});
	$('body').find('[data-content]').animate({maxWidth: '75%', flexBasis: '75%'}, {
		duration: 500
	});
}

$('[data-filter] form').on('change', function(e){
	e.preventDefault();
	var filterResultBlock = $('[data-filter-result]');
	pOffset = $('[data-filter]').offset();
	eOffset = $(e.originalEvent.path[0]).offset();
	eHalfHeight = $(e.originalEvent.path[0]).outerHeight();
	offset = (eOffset.top - pOffset.top) - filterResultBlock.outerHeight() / 2 + eHalfHeight / 2;
	filterResultBlock.css('top', offset+'px');

	filterResultBlock.addClass('active').fadeIn(500);
});

$(document).ready(function(){
	$('[data-action="toggle"]').click(function(e){
		if($(this).is('.active'))
			$(this).parents('[data-parent]').first().find('[data-toggle]:visible').hide();
		else
			$(this).parents('[data-parent]').first().find('[data-toggle]:not(:visible)').stop().slideToggle(500);

		$(this).toggleClass('active');
	});

	$(document).mouseup(function(e) {
		var container = $('[data-filter-result]'),
			filterInputs = $('.filtre_fon .checkbox-group');

		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if (!filterInputs.is(e.target) && filterInputs.has(e.target).length === 0) {
				container.removeClass('active').hide();
			}
		}
	});

	$('.col-heart .heart-btn').on('click', function () {
		$(this).toggleClass('active');
	});

	$('.filter-parameters-block').on('click', '.search-selected_param__close', function () {
		var parentBlock = $(this).parents('.filter-parameters');
		$('#' + parentBlock.attr('class').split(' ')[1]).prop('checked', false);
		parentBlock.remove();
		if ($('.filter-parameters').length === 0) {
			$('.filter-parameters-block').hide();
		}
	});
	$('.reset-btn-row .reset-filter-btn').on('click', function (e) {
		e.preventDefault();
		$('.filter-parameters').remove()
		$('.filter-parameters-block').hide();
		$('.filtre_fon .checkbox-group input').prop('checked', false);
	});

	var parameterHTML = '<div class="filter-parameters">\n' +
		'                                            <div class="search-selected_label d-flex flex-nowrap">\n' +
		'                                                <span class="search-selected_param"></span>\n' +
		'                                                <span class="search-selected_param__close mx-1"><i class="icon-close"></i></span>\n' +
		'                                            </div>\n' +
		'                                        </div>';
	$('.filtre_fon .checkbox-group input').on('change', function () {
		var resetFilterList = $('.filter-parameters-list');
		var position = $('.filtre_fon').scrollTop();
		if ($(this).prop('checked')) {
			if ($('.filter-parameters').length === 0) {
				$('.filter-parameters-block').css('display', 'block');
			}
			if ($(this).attr('type') === 'radio') {
				$('[name=' + $(this).attr('name') + ']:not(:checked)').each(function () {
					resetFilterList.parents('.filter-parameters-block').find('.' + $(this).attr('id')).remove();
				});
			}
			resetFilterList.prepend(parameterHTML);
			resetFilterList.parents('.filter-parameters-block').find('.filter-parameters').first().addClass($(this).attr('id'))
				.find('.search-selected_param').text($(this).parents('.checkbox-group').find('label').text());
			if ($('.filter-parameters').length === 1) {
				$('.filtre_fon').scrollTop(position + $('.filter-parameters-block').outerHeight());
			}
		} else {
			resetFilterList.parents('.filter-parameters-block').find('.' + $(this).attr('id')).remove();
			if ($('.filter-parameters').length === 0) {
				$('.filtre_fon').scrollTop(position - $('.filter-parameters-block').outerHeight());
				$('.filter-parameters-block').hide();
			}
		}
	});

	$('.search_fon').on('click', '.search_fon_head_text:not(.no-filter)', function () {
		if ($(this).hasClass('filter-arrow')) {
			$(this).toggleClass('active');
		} else {
			$('.search_fon_head_text').removeClass('filter-arrow');
			$(this).addClass('filter-arrow');
		}
		var className = $(this).parent().attr('class').split(' ')[0];
		sortTable('.filter-table', className, $(this).hasClass('active') ? 'desc' : 'asc');
	});
	$('.search-sort__list li a').on('click', function (e) {
		e.preventDefault();
		$('.search-sort__list li').removeClass('active');
		$(this).parent().addClass('active');
		$('.search_sort_mobile_menu').hide();
		$('.mobile-sort-name').text($(this).attr('data-sort-name'));
		var className = $(this).parent().attr('class').split(' ')[0];
		sortTable('.filter-table', className, $('.search_sort_mobile.order_sort').hasClass('active') ? 'desc' : 'asc');
	});

	$('.search_sort_mobile.order_sort').on('click', function () {
		$(this).toggleClass('active');
		var className = $('.search-sort__list li.active').attr('class').split(' ')[0];
		sortTable('.filter-table', className, $(this).hasClass('active') ? 'desc' : 'asc');
	});

	$('.but_sort_mobile').on('click', function () {
		$('.search_sort_mobile_menu').show();
	});
	$(document).mouseup(function(e) {
		var container = $('.search_sort_mobile_menu');
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			container.hide();
		}
	});

	$('.title-heart').on('click', function () {
		$('.title-toggle-row').toggleClass('active-title');
	});
});

function sortTable(table, col, order) {
	var asc = order === 'asc';
	$(table).each(function () {
		$(this).find('.table_row_search').sort(function(a, b) {
			var textA = $(a).find('.' + col + ' span').text(),
				textB = $(b).find('.' + col + ' span').text();
			if (isNumber(textA) && isNumber(textB)) {
				if (parseInt(textA) === parseInt(textB)) {
					return 0;
				}
				if (asc) {
					return parseInt(textA) > parseInt(textB) ? 1 : -1;
				} else {
					return parseInt(textB) > parseInt(textA) ? 1 : -1;
				}
			}
			if (asc) {
				return textA.toString().localeCompare(textB.toString());
			} else {
				return textB.toString().localeCompare(textA.toString());
			}
		}).appendTo($(this));
	});
}

function isNumber(str) {
	return /^\d*\.?\d+$/.test(str);
}

function toggle(obj, id, text, className){
	target = $('body').find('#'+id);
	target.slideToggle(500);

	$(obj).parent().toggleClass('active');
	if($(text).length > 0) {
		if (parseInt(target.height()) > 0)
			$(obj).text(text[1])
		else
			$(obj).text(text[0])
	}
}
