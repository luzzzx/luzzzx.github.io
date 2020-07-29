var idleTimer = null;
var idleState = false;		// состояние отсутствия
var idleWait = 30000;		// время ожидания в мс.
var delayShow = 5000;		// задержка после загрузки страницы и появленем персонажа
var state = 0;
	//state = 0 - Нмчего не активно
	//state = 1 - ch-background
	//state = 2 - ch-small
	//state = 3 - ch-button

$(document).ready(function() {
	if (!$.cookie('character')) {
		$.cookie('character', true, {
			expires: 7,
			path: '/'
		});

		setTimeout(function(){
			$(".ch-background").fadeIn(300);
			state = 1;
		}, delayShow);
	} else {
		setTimeout(function(){ 					
			$(".ch-small").fadeIn(300);
			state = 2;
		}, delayShow);		
	}

	$(".characterOuter").on("click", ".answer a", function (event) {
   		event.preventDefault();	
   		var answer = $(this).parent(".answer").data("answer");
   		switch(answer) {
			case 'background-yes':
				$(".ch-background .question").text("Я задам Вам несколько вопросов!");
				$(".ch-background .ch-center").attr("src", "tpl/elf/Armature_Idle.gif");
				state = 1;
				break;
			case 'background-no':
				$(".ch-background .question").html("Обращайтесь!<br> Я буду рядом!");
				setTimeout(function(){
					$(".ch-background").fadeOut(300);
					$(".ch-button").delay(300).fadeIn(300);
					state = 3;
				}, 1000);
				break;
			case 'small-yes':
				$(".ch-background .question").text("Я задам Вам несколько вопросов!");
				$(".ch-background .ch-center").attr("src", "tpl/elf/Armature_Idle.gif");
				$(".ch-small").fadeOut(300);
				$(".ch-background").delay(300).fadeIn(300);
				state = 1;
				break;
			case 'small-no':
				$(".ch-small .question").html("Обращайтесь!<br> Я буду рядом!");
				setTimeout(function(){
					$(".ch-small").fadeOut(300);
					$(".ch-button").delay(300).fadeIn(300);
					state = 3;
				}, 1000);
				break;
			default:
				break;
		}
	});

	$(".characterOuter").on("click", ".ch-button", function (event) {
   		event.preventDefault();
		$(".ch-background .question").text("Здравствуйте, Вам помочь?");
		$(".ch-background img").attr("src", "tpl/elf/Armature_greeting.gif");
		$(".ch-button").fadeOut(300);
		$(".ch-background").delay(300).fadeIn(300);
		state = 1;
	});

	$(document).bind('mousemove keydown scroll', function(){		
		clearTimeout(idleTimer); // отменяем прежний временной отрезок
		if(idleState == true){ 
			// Действия на возвращение пользователя
			$(".ch-small").fadeOut(300);
			setTimeout(function(){
				$(".ch-small .question").html("Я могу Вам помочь?");
				$(".ch-small .ch-dialog").show(0);
				$(".ch-small .ch-right-bottom").removeClass("wait");
				$(".ch-small").fadeIn(300);
			}, 300);
		}

		idleState = false;
		idleTimer = setTimeout(function(){ 
			// Действия на отсутствие пользователя. Действие срабатывает если персонаж находится в углу или в свернутом состоянии
			if(state > 1) {
				$(".ch-button").fadeOut(300);
				$(".ch-small").fadeOut(300);
				setTimeout(function(){
					$(".ch-small .ch-dialog").hide(0);
					$(".ch-small .ch-right-bottom").addClass("wait");					
					$(".ch-small").fadeIn(300);
				}, 300);				
				
				idleState = true; 
			}
		}, idleWait);
	});
 
	$("body").trigger("mousemove"); // ложное событие, для запуска скрипта
});