$(".slider_registr").owlCarousel({
	items:1,
    // loop:true,
    autoplay:true,
    autoplayTimeout:5000,
	smartSpeed: 800,
	animate: 'linear',
});
$(".slider_watched").owlCarousel({
	items:5,
    // loop:true,
    // autoplay:true,
    autoplayTimeout:5000,
	smartSpeed: 800,
	animate: 'linear',
	responsiveClass:true,
	responsive:{
		0:{
            items:1,
        },
		540:{
            items:2,
        },
        720:{
            items:3,
        },
        992:{
            items:4,
        },
        1200:{
            items:5,
        }
    }
});
 $( ".slider_watched .owl-prev").html('<img src="img/arrow-left2.png">');
 $( ".slider_watched .owl-next").html('<img src="img/arrow-right2.png">');

 $(document).ready(function(){
 	
 	let firstActive = true;
 	$('[data-tab]').each(function(e, elem){

 		let key = $(elem).data('tab');

 		if (firstActive){
 			$(elem).addClass('active');

 			if ($(elem).attr('type') == 'radio')
 				$(elem).attr('checked', true);

 			$('[data-tab-key='+key+']').addClass('active');

 			firstActive = false;
 		}


 		$(elem).click(function(e){
 			$('[data-tab-key]').removeClass('active');
 			$('[data-tab]').removeClass('active');
 			$('[data-tab-key='+key+']').addClass('active');
 			$(this).addClass('active');
 		});

 	});

 	$('[data-action="change-button-text"]').change(function(e){
 		var txt = $(this).data('text');
 		$('[data-submit-button]').text(txt);
 	});

 	var sliderKey = $('[data-slider-nav]').data('slider-nav');
 	$('[data-slider-nav]').slick({
 		vertical: true,
 		slidesToShow: 3,
 		infinite: false,
 		centerMode: true,
 		prevArrow: '[data-arrow-prev='+sliderKey+']',
 		nextArrow: '[data-arrow-next='+sliderKey+']',
 		asNavFor: '[data-slider-from='+sliderKey+']',
 		focusOnSelect: true
 	});
 	
 	$('[data-slider-from]').slick({ 		
 		slidesToShow: 1, 		
 		infinite: false,
 		arrows: false,
 		speed: 300,
		fade: true,
		cssEase: 'ease-in-out',
		adaptiveHeight: true,
 		asNavFor: '[data-slider-nav='+sliderKey+']'
 	});

	$(".selectpicker1").selectpicker(); 
	$(".selectpicker2").selectpicker(); 
	$(".selectpicker3").selectpicker(); 
	$(".selectpicker4").selectpicker(); 
	$(".selectpicker5").selectpicker(); 
	$(".selectpicker6").selectpicker(); 
	$(".selectpicker7").selectpicker(); 
	$(".selectpicker8").selectpicker(); 
	$(".selectpicker9").selectpicker(); 
	$(".selectpicker10").selectpicker(); 
	$(".selectpicker11").selectpicker();
});
$(".avtomobil_vin").fadeOut();
$(".lab_first").on("click",function(){
	$(".avtomobil_list").fadeIn(0);
	$(".avtomobil_vin").fadeOut(0);
})
$(".lab-second").on("click",function(){
	$(".avtomobil_list").fadeOut(0);
	$(".avtomobil_vin").fadeIn(0);
})
$(document).ready(function(){
  $(".num_phone,.num_phone_popup").inputmask("+7(999) 999-99-99")
});
// $(window).resize(function(){
//   window.location.reload();
// });
if($(window).width() >= 1200){
	$('.catalog_slider').slick({
    dots: true,
    slidesPerRow:5,
    infinite: false,
    rows: 2,
	  prevArrow:"<img style='position: absolute; top: 40%; left: 10px; z-index: 3;' class='a-left control-c prev slick-prev' src='img/arrow-left2.png'>",
	   nextArrow:"<img style='position: absolute; top: 40%; right: 10px; z-index: 3;' class='a-right control-c next slick-next' src='img/arrow-right2.png'>"
	});
	$('.slick-dots li').html('<div style="width:30px;height:30px"></div>');
}else if($(window).width() < 576){
	$('.catalog_slider').slick({
    dots: true,
    slidesPerRow: 1,
    infinite: false,
    rows: 2,
    speed: 300,
	  prevArrow:"<img style='position: absolute; top: 40%; left: 10px; z-index: 3;' class='a-left control-c prev slick-prev' src='img/arrow-left2.png'>",
	   nextArrow:"<img style='position: absolute; top: 40%; right: 10px; z-index: 3;' class='a-right control-c next slick-next' src='img/arrow-right2.png'>"
	});
	$('.slick-dots li').html('<div style="width:10px;height:10px"></div>');
}else if($(window).width() < 992){
	$('.catalog_slider').slick({
    dots: true,
    slidesPerRow: 2,
    infinite: false,
    rows: 2,
	  prevArrow:"<img style='position: absolute; top: 40%; left: 10px; z-index: 3;' class='a-left control-c prev slick-prev' src='img/arrow-left2.png'>",
	   nextArrow:"<img style='position: absolute; top: 40%; right: 10px; z-index: 3;' class='a-right control-c next slick-next' src='img/arrow-right2.png'>"
	});
$('.slick-dots li').html('<div style="width:20px;height:20px"></div>');
}else if($(window).width() < 1200){
	$('.catalog_slider').slick({
    dots: true,
    slidesPerRow: 4,
    infinite: false,
    rows: 2,
	  prevArrow:"<img style='position: absolute; top: 40%; left: 10px; z-index: 3;' class='a-left control-c prev slick-prev' src='img/arrow-left2.png'>",
	   nextArrow:"<img style='position: absolute; top: 40%; right: 10px; z-index: 3;' class='a-right control-c next slick-next' src='img/arrow-right2.png'>"
	});
	$('.slick-dots li').html('<div style="width:10px;height:10px"></div>');
 }
 
$('[data-fancybox="gallery"]').fancybox();
$(".header_input").on('change keyup paste', function() {
	if($(".header_input").val().length >= 3){
		$(".input_search_change").css({
			display:'block'
		})
	}else{
		$(".input_search_change").css({
			display:'none'
		})
	}
	
})
$(".header_input").on("click",function(){
	$(".search_input_close").css({
		display:'flex'
	})
	$(".fon_input").css({
		display:'block'
	})
})
$(".search_input_close,.search_rez_close,.fon_input").on("click",function(){
	$(".search_input_close,.search_rez_close").css({
		display:'none'
	})
	$(".fon_input").css({
		display:'none'
	})
	$(".input_search_change").css({
		display:'none'
	})
	$(".button_search_rez a").addClass("bg-light-gray")
	$(".brend_search_select,.sklad_search_select").css({
		display:'none'
	})
})
if($(window).width() < 768){
	$(".header_input").on("click",function(){
		$(".search_ikon").css({
			right: '36px',
			zIndex: '100'
		})
	})
	$(".search_input_close").on("click",function(){
		$(".search_ikon").css({
			right: '0px',
		})
	})
}
$(".table_height").css({
	height:$(".table_height table").height()
})
$(".brend_search_select,.sklad_search_select").hide();
$(".brend_search_button a").on("click",function(){
	$(".brend_search_button").children(".brend_search_select").slideToggle(500);
})
$(".sklad_search_button a").on("click",function(){
	$(".sklad_search_button").children(".sklad_search_select").slideToggle(500);
})
$(".zapchast ul li").each(function(){
	if(($(this).children("ul")).length >0){
		$(this).children("a").css({
			color:'gray'
		})
	}else{
		$(this).children("a").css({
			color:'#860002'
		})
	}
})
$(document).ready(function() {
$("a#inlinevin").fancybox({
		'hideOnContentClick': true,
	});
$("a#setting_yvd").fancybox({
		'hideOnContentClick': true,
	});
});
$(".button_search_rez a").on("click",function(){

	$(".button_search_rez a").css({
		background:'#fff'
	})
	$(".button_search_rez a").removeClass("bg-light-gray")
	$(".fon_input").css({
		display:'block'
	})
	$(".search_rez_close").css({
		display:'block'
	})
});

$(".zvyozdchki").each(function(){
	var datawidth = parseFloat($(this).attr("data_width"));
	var starwidth = parseFloat($(this).children(".zvezda").width()/5);
	$(this).children(".star_width").css({
		width:(datawidth * starwidth)+'px'
	})
})
// $(".count_product").InputSpinner();