$(document).ready(function () {
	$(document).scroll(function () {
		var $nav = $(".nav");
		$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
	});

	$('[data-fancybox="gallery"]').fancybox({
		toolbar  : false,
		smallBtn : true,
		arrows: true,
		loop : false,
		transitionEffect: "slide",
		// afterLoad   : addLinks,
		// beforeClose : removeLinks
	})


	$(window).on('load resize', function () {
        if ($(this).width() < 769) {
          if ($('.tarif ul li').length > 4) {
			$('.tarif ul li:gt(3)').addClass('extra');
          }
        } else {
			$('.tarif ul li:gt(3)').removeClass('extra');
			$('.tarif ul li:gt(3)').css('display', '');
		}
	  })
	  
	  $('.show-more').on('click', function(e) {
		e.preventDefault();
        //toggle elements with class .ty-compact-list that their index is bigger than 2
        $('.tarif ul li:gt(3)').toggle();
        //change text of show more element just for demonstration purposes to this demo
        $(this).text() === 'Скрыть' ? $(this).text('Показать больше') : $(this).text('Скрыть');
	});
	
});