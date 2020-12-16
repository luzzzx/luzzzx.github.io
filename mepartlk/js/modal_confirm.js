$(function () {
	$('.modal.confirm_modal .close').on('click', function () {
		$(this).parents('.modal').stop().fadeOut();
	});
	$('.modal.confirm_modal.send .ok').on('click', function () {
		$(this).parents('.modal').stop().fadeOut();
	});
	$('.modal.confirm_modal .cancel').on('click', function () {
		$(this).parents('.modal').stop().fadeOut();
	});
});