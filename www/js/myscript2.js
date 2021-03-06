// JavaScript Document

$(document).ready(function() {
	
    // Переменная отображения секунд. По умолч. выключены
	var secOn = 'no';

	// Загрузка функций вывода часов и даты
	window.onload = function () {
		saveSettings();
		initDate();
		initTime();
		initAlarm();
	}
	
	
	// Проверка всех сохраненных настроек
	// Если они есть - применяем
	
	function saveSettings(){
		if(localStorage.getItem('background')) $('#content').css("background","url("+localStorage.getItem('background')+") no-repeat center center");
		if(localStorage.getItem("color")) {
			$('#time').css('color', localStorage.getItem("color"));
			$('#date').css('color', localStorage.getItem("color"));
			$('#setCLR').val(localStorage.getItem("color"));
			$('#setCLRT').attr('placeholder',localStorage.getItem("color"));
		}
		if(localStorage.getItem("fontFamily")){
			$('#time').css('fontFamily', localStorage.getItem("fontFamily"));
			$('#date').css('fontFamily', localStorage.getItem("fontFamily"));
			$('#selectShrift').val(localStorage.getItem("fontFamily"));
		}
		if(localStorage.getItem("fontSizeT")){
			$('#time').css('fontSize', localStorage.getItem("fontSizeT")+"px");
			$('#setFZ').val(localStorage.getItem("fontSizeT"));
			$('#txFZ').val(localStorage.getItem("fontSizeT"));
		}
		if(localStorage.getItem("fontSizeD")){
			$('#date').css('fontSize', localStorage.getItem("fontSizeD")+"px");
			$('#setFZD').val(localStorage.getItem("fontSizeD"));
			$('#txFZD').val(localStorage.getItem("fontSizeD"));
		}
		if(localStorage.getItem("height")) {
			$('.mainT').css('height', localStorage.getItem("height")+"%");
			$('#setHTH').val(localStorage.getItem("height"));
		}
		if(localStorage.getItem("sec") == 'yes') {
			secOn = 'yes';
			$('#setSEC').val('1');
		} else {
			secOn = 'no'; 
			$('#setSEC').val('0');
		}
		if(localStorage.getItem("date") == 'block'){
			$('#date').css('display','block');
			$('#setDAT').val('1');
		} else {
			$('#date').css('display','none');
			$('#setDAT').val('0');
		}
		if(localStorage.getItem("textShadow") == 'none'){
			$('#time').css('textShadow','none');
            $('#date').css('textShadow','none');
			$('#setSAD').val('0');
		} else {
			$('#time').css('textShadow','0 0 6px rgba(0, 0, 0, 0.3)');
            $('#date').css('textShadow','0 0 6px rgba(0, 0, 0, 0.3)');
			$('#setSAD').val('1');
		}
		if(localStorage.getItem("fontWeight") == 'bold'){
			$('#time').css('fontWeight','bold');
            $('#date').css('fontWeight','bold');
			$('#setBLD').val('1');
		} else {
			$('#time').css('fontWeight','normal');
            $('#date').css('fontWeight','normal');
			$('#setBLD').val('0');
		}
	}


	
	// Вывод Даты
	function initDate() {
		
		var now = new Date();
		var month = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'];
		var dateString = (now.getDate() > 9 ? now.getDate() : '' + now.getDate()) +
						' ' + 
						month[now.getMonth()]+
						' ' + 
						now.getFullYear();

		document.getElementById('date').innerHTML = '<span class="date">' + dateString + '</span>';

	}
    
    
    
	// Вывод Времени
	function initTime() {	
		var now = new Date();
		if (secOn == 'no') {
			var timeString = (now.getHours() > 9 ? now.getHours() : '0' + now.getHours()) +
						':' +
						(now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes());
						
		}
		else {
			var timeString = (now.getHours() > 9 ? now.getHours() : '0' + now.getHours()) +
						':' +
						(now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes())+
						':' +
						(now.getSeconds() > 9 ? now.getSeconds() : '0' + now.getSeconds());
						
		}
		document.getElementById('time').innerHTML = timeString;
		setTimeout(initTime,1000);

	}

	// Проверка наличия установленного будильника
	function initAlarm(){
		
		if(localStorage.getItem('hours1') && localStorage.getItem('minutes1')){
			alarmOn1();
			$('#alrON1').val('1');
			$('#alrCH1').val(localStorage.getItem('hours1'));
            $('#alrMN1').val(localStorage.getItem('minutes1'));
			$('#alrCH1').attr('disabled','true');
            $('#alrMN1').attr('disabled','true');
		}
		if(localStorage.getItem('hours2') && localStorage.getItem('minutes2')){
			alarmOn2();
			$('#alrON2').val('1');
			$('#alrCH2').val(localStorage.getItem('hours2'));
            $('#alrMN2').val(localStorage.getItem('minutes2'));
			$('#alrCH2').attr('disabled','true');
            $('#alrMN2').attr('disabled','true');
		}
		if(localStorage.getItem('hours3') && localStorage.getItem('minutes3')){
			alarmOn3();
			$('#alrON3').val('1');
			$('#alrCH3').val(localStorage.getItem('hours3'));
            $('#alrMN3').val(localStorage.getItem('minutes3'));
			$('#alrCH3').attr('disabled','true');
            $('#alrMN3').attr('disabled','true');
		}
		if(localStorage.getItem('hours4') && localStorage.getItem('minutes4')){
			alarmOn4();
			$('#alrON4').val('1');
			$('#alrCH4').val(localStorage.getItem('hours4'));
            $('#alrMN4').val(localStorage.getItem('minutes4'));
			$('#alrCH4').attr('disabled','true');
            $('#alrMN4').attr('disabled','true');
		}
	}
	
	
	//	Модальное око настроек
	$("#dim").css("height", $(document).height());
    		
    		$(".set").click(function(){
    			$("#dim").fadeIn();
				$('.msgbox').animate({right:0},500);
    			return false;
			});
    		
    		$("#save").click(function(){
    			$("#dim").fadeOut();
				$('.msgbox').animate({right:-400},500);
				//$('.msgbox2').css('display','none');
    			return false;
			});

		
		$(window).bind("resize", function(){
		 	$("#dim").css("height", $(window).height());
		});
	
	// Окно будильника затемнение
	$("#dim2").css("height", $(document).height());
	
	$(window).bind("resize", function(){
		 	$("#dim2").css("height", $(window).height());
		});
	
	// Пункт Настройки
	$('.nastr').toggle(function(){
		$('.nastrW').slideDown(500);
		
	}, function(){
		$('.nastrW').slideUp(500);
	});
	
	// Настройки: Фон
	$('.tFon').click(function(){
		$('.tVisib').css({'border-left':'none','border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$('.tShrift').css({'border-left':'none','border-right':'1px solid #e0e0e0', 'border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$(this).css({'border-right':'1px solid #e0e0e0','border-bottom':'none','background-color':'#ffffff'});
		$('.wShrift, .wVisib').css('display','none');
		$('.wFon').css({'display':'block','background-color':'#ffffff'});
	});
	
	// Настройки: Шрифт
	$('.tShrift').click(function(){
		$('.tFon').css({'border-right':'none','border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$('.tVisib').css({'border-left':'none','border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$(this).css({'border-left':'1px solid #e0e0e0','border-right':'1px solid #e0e0e0', 'border-bottom':'none','background-color':'#ffffff'});
		$('.wFon, .wVisib').css('display','none');
		$('.wShrift').css({'display':'block','background-color':'#ffffff'});
	});
	
	// Настройки: Отображение
	$('.tVisib').click(function(){
		$('.tFon').css({'border-right':'1px solid #e0e0e0','border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$('.tShrift').css({'border-left':'none','border-right':'none','border-bottom':'1px solid #e0e0e0','background-color':'#f9f9f9'});
		$(this).css({'border-left':'1px solid #e0e0e0','border-right':'none', 'border-bottom':'none','background-color':'#ffffff'});
		$('.wFon, .wShrift').css('display','none');
		$('.wVisib').css({'display':'block','background-color':'#ffffff'});
	});
    
	
	// Пункт Будильник
	$('.budil').toggle(function(){
		$('.budilW').slideDown(500);
		$('.wBudil').css({'display':'block','background-color':'#ffffff'});
	}, function(){
		$('.budilW').slideUp(500);
	});
    
	
	// Пункт Секундомер
	$('.secundom').toggle(function(){
		$('.secundomW').slideDown(500);
		$('.wSecundom').css({'display':'block','background-color':'#ffffff'});
	}, function(){
		$('.secundomW').slideUp(500);
	});
	
    
	// Пункт Таймер
	$('.timer').toggle(function(){
		$('.timerW').slideDown(500);
		$('.wTimer').css({'display':'block','background-color':'#ffffff'});
		//$('.timTXT').slideDown(500);
	}, function(){
		$('.timerW').slideUp(500);
	});
    
	
	// Пункт О приложении
	$('.about').toggle(function(){
		$('.aboutW').slideDown(500);
		$('.wAbout').css({'display':'block','background-color':'#ffffff'});
	}, function(){
		$('.aboutW').slideUp(500);
	});
    
	
	// Выбор и установка фона страницы
    $('.tBack td').click(function(){
        var classa = $(this).attr('class');
        switch (classa) {
				case 'bk1':
				$('#content').css("background","url(img/bgb/01.jpg) no-repeat center center");
                localStorage.setItem("background", 'img/bgb/01.jpg');
				break
				case 'bk2':
				$('#content').css("background","url(img/bgb/02.jpg) no-repeat center center");
                localStorage.setItem("background", 'img/bgb/02.jpg');
				break
				case 'bk3':
				$('#content').css("background","url(img/bgb/03.jpg) no-repeat center bottom");
				localStorage.setItem("background", 'img/bgb/03.jpg');
				break
				case 'bk4':
				$('#content').css("background","url(img/bgb/04.jpg) no-repeat center top");
				localStorage.setItem("background", 'img/bgb/04.jpg');
				break
				case 'bk5':
				$('#content').css("background","url(img/bgb/05.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/05.jpg');
				break
				case 'bk6':
				$('#content').css("background","url(img/bgb/06.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/06.jpg');
				break
				case 'bk7':
				$('#content').css("background","url(img/bgb/07.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/07.jpg');
				break
				case 'bk8':
				$('#content').css("background","url(img/bgb/08.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/08.jpg');
				break
				case 'bk9':
				$('#content').css("background","url(img/bgb/09.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/09.jpg');
				break
                case 'bk10':
				$('#content').css("background","url(img/bgb/010.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/010.jpg');
				break
                case 'bk11':
				$('#content').css("background","url(img/bgb/011.jpg) no-repeat center center");
				localStorage.setItem("background", 'img/bgb/011.jpg');
				break
                case 'bk12':
				//downBack();
				break
				default:
				//selectStyle(1);
            }
    });
    
	// Установка собственного фона
	$('#input').change(function(){
		var selectedFile = $('#input')[0].files[0];
		var nIMG = window.URL.createObjectURL(selectedFile);
		$('#content').css("background","url("+nIMG+") no-repeat center center");
		localStorage.setItem("background", nIMG);
	});
	
	
	// Шрифт: цвет времени и даты
	$('#setCLR').change(function(){
        var znachColor = $(this).val();
        $('#setCLRT').val($(this).val());
        $('#time').css('color', znachColor);
		$('#date').css('color', znachColor);
		localStorage.setItem("color", znachColor);
		
    });
    
    $('#addCLR').click(function(){
        var znachColor = $('#setCLRT').val();
        $('#time').css('color', znachColor);
		$('#date').css('color', znachColor);
		localStorage.setItem("color", znachColor);
    });	
    
    
	// Шрифт: начертание шрифта
	$('#selectShrift').change(function(){
        $('#time').css('fontFamily', $(this).val());
		$('#date').css('fontFamily', $(this).val());
		localStorage.setItem("fontFamily", $(this).val());
	});
	
    
    // Шрифт: размер времени
    $('#setFZ').change(function(){
		$('#time').css('fontSize', $(this).val()+"px");
		$('#txFZ').val($(this).val());
        localStorage.setItem("fontSizeT", $(this).val());	
	});
    
    // Шрифт: размер даты
    $('#setFZD').change(function(){
		$('#date').css('fontSize', $(this).val()+"px");
		$('#txFZD').val($(this).val());
        localStorage.setItem("fontSizeD", $(this).val());
	});
	
	 // Шрифт: Высота положение
    $('#setHTH').change(function(){
		$('.mainT').css('height', $(this).val()+"%");
        localStorage.setItem("height", $(this).val());
	});
	
	
	// Отображение: секуны    
    $('#setSEC').change(function(){
        if($(this).val() == '0') {
            secOn = 'no';
			localStorage.setItem("sec", 'no');
        } else {
            secOn = 'yes';
			localStorage.setItem("sec", 'yes');
        }
    });
	
	
	// Отображение: дата
	$('#setDAT').change(function(){
        if($(this).val() == '0') {
            $('#date').css('display','none');
			localStorage.setItem("date", 'none');
        } else {
            $('#date').css('display','block');
			localStorage.setItem("date", 'block');
        }
    });
    
    // Отображение: тень
	$('#setSAD').change(function(){
        if($(this).val() == '0') {
            $('#time').css('textShadow','none');
            $('#date').css('textShadow','none');
			localStorage.setItem("textShadow", 'none');
        } else {
            $('#time').css('textShadow','0 0 6px rgba(0, 0, 0, 0.3)');
            $('#date').css('textShadow','0 0 6px rgba(0, 0, 0, 0.3)');
			localStorage.setItem("textShadow", 'yes');
        }
    });
	
	// Отображение: жирный
	$('#setBLD').change(function(){
        if($(this).val() == '0') {
            $('#time').css('fontWeight','normal');
            $('#date').css('fontWeight','normal');
			localStorage.setItem("fontWeight", 'normal');
        } else {
            $('#time').css('fontWeight','bold');
            $('#date').css('fontWeight','bold');
			localStorage.setItem("fontWeight", 'bold');
        }
    });
    
 ////////////// Настройки и установки будильников   
// Указываем расположение звука
var alarmSound1 = new Audio('audio/01.mp3');
alarmSound1.volume = 0.5;
var alarmSound2 = new Audio('audio/02.mp3');
alarmSound2.volume = 0.5;
var alarmSound3 = new Audio('audio/03.mp3');
alarmSound3.volume = 0.5;
var alarmSound4 = new Audio('audio/04.mp3');
alarmSound4.volume = 0.5;
var alarmSoundT = new Audio('audio/05.mp3');
alarmSoundT.volume = 0.5;	
	
    
 // Обрабатываем событие включения и выключения будильника   
$('.alarm').change(function alrStat(){
    var tN = $(this).attr('alt');
    if($(this).val() == '1') {

        if(($('#alrCH'+tN).val() != "") && ($('#alrMN'+tN).val() != "")) {
             switch (tN) {
				case '1':
				localStorage.setItem("hours1", $('#alrCH'+tN).val());
				localStorage.setItem("minutes1", $('#alrMN'+tN).val());	 
				alarmOn1();	 
				break   
                case '2':
                localStorage.setItem("hours2", $('#alrCH'+tN).val());
				localStorage.setItem("minutes2", $('#alrMN'+tN).val());
				alarmOn2();	 
				break
                case '3':
                localStorage.setItem("hours3", $('#alrCH'+tN).val());
				localStorage.setItem("minutes3", $('#alrMN'+tN).val());
                alarmOn3();	
				break
                case '4':
                localStorage.setItem("hours4", $('#alrCH'+tN).val());
				localStorage.setItem("minutes4", $('#alrMN'+tN).val());
                alarmOn4();	
				break
                default:
				//selectStyle(1);
            }

                $('#alrCH'+tN).attr('disabled','true');
                $('#alrMN'+tN).attr('disabled','true');
        } else {
			$('#message').css('color','#F44336').animate({opacity:'1'}, 1000).text("Укажите время будильника!").animate({opacity:'0'}, 4000);
        }
    } else {
        switch (tN) {
				case '1':
                clearInterval(alarmInterval1);
				alarmSound1.pause();
				console.log('Будильник 1 остановлен');
				break   
                case '2':
                clearInterval(alarmInterval2);
				alarmSound2.pause();
				break
                case '3':
                clearInterval(alarmInterval3);
				alarmSound3.pause();
				break
                case '4':
                clearInterval(alarmInterval4);
				alarmSound4.pause();
				break
                default:
				//selectStyle(1);
            }
        $('#alrCH'+tN).removeAttr('disabled');
        $('#alrMN'+tN).removeAttr('disabled');
		localStorage.removeItem('hours'+tN); 
		localStorage.removeItem('minutes'+tN); 
    }
});
	
    // Будильник 1	
	function alarmOn1(){	
		console.log('Будильник 1 запущен');
		alarmInterval1 = setInterval(function () {
			dateA = new Date();
			currentHours = dateA.getHours();
			currentMin = dateA.getMinutes();

			if (localStorage.getItem('hours1') == currentHours && localStorage.getItem('minutes1') == currentMin) {
				alarmSound1.play();
				$('.alrTIT').text("Будильник "+localStorage.getItem('hours1')+":"+localStorage.getItem('minutes1'));
				$('.alrBTOFF').attr('alt','1');
				$('#dim2').fadeIn();
				$('.msgbox2').css('display','block');
				ntA1();
			}
		}, 1000); 
	}
	
    // Будильник 2
	function alarmOn2(){	
		console.log('Будильник 2 запущен');
		alarmInterval2 = setInterval(function () {
			dateA = new Date();
			currentHours = dateA.getHours();
			currentMin = dateA.getMinutes();

			if (localStorage.getItem('hours2') == currentHours && localStorage.getItem('minutes2') == currentMin) {
				alarmSound2.play();
				$('.alrTIT').text("Будильник "+localStorage.getItem('hours2')+":"+localStorage.getItem('minutes2'));
				$('.alrBTOFF').attr('alt','2');
				$('#dim2').fadeIn();
				$('.msgbox2').css('display','block');
				ntA2();
			}
		}, 1000); 
	}
	
    // Будильник 3
	function alarmOn3(){   
		console.log('Будильник 3 запущен');
		alarmInterval3 = setInterval(function () {
			dateA = new Date();
			currentHours = dateA.getHours();
			currentMin = dateA.getMinutes();

			if (localStorage.getItem('hours3') == currentHours && localStorage.getItem('minutes3') == currentMin) {
				alarmSound3.play();
				$('.alrTIT').text("Будильник "+localStorage.getItem('hours3')+":"+localStorage.getItem('minutes3'));
				$('.alrBTOFF').attr('alt','3');
				$('#dim2').fadeIn();
				$('.msgbox2').css('display','block');
				ntA3();
			}
		}, 1000);
	}
	
    // Будильник 4
	function alarmOn4(){	
		console.log('Будильник 4 запущен');
		alarmInterval4 = setInterval(function () {
			dateA = new Date();
			currentHours = dateA.getHours();
			currentMin = dateA.getMinutes();

			if (localStorage.getItem('hours4') == currentHours && localStorage.getItem('minutes4') == currentMin) {
				alarmSound4.play();
				$('.alrTIT').text("Будильник "+localStorage.getItem('hours4')+":"+localStorage.getItem('minutes4'));
				$('.alrBTOFF').attr('alt','4');
				$('#dim2').fadeIn();
				$('.msgbox2').css('display','block');
				ntA4();
			}
		}, 1000); 
	}
	
  // Программная остановка будильника  
function turnAlarmOff(nuM) {
	switch (nuM) {
				case '1':
                clearInterval(alarmInterval1);
				alarmSound1.pause();
            	alarmSound1.currentTime = 0;    
				break   
                case '2':
                clearInterval(alarmInterval2);
                alarmSound2.pause();
				alarmSound2.currentTime = 0;  
				break
                case '3':
                clearInterval(alarmInterval3);
                alarmSound3.pause();
				alarmSound3.currentTime = 0;  
				break
                case '4':
                clearInterval(alarmInterval4);
                alarmSound4.pause();
				alarmSound4.currentTime = 0;  
				break
                default:
				//selectStyle(1);
            }
		$('#alrON'+nuM).val('0');
		$('#alrCH'+nuM+', #alrMN'+nuM).removeAttr('disabled');
		localStorage.removeItem('hours'+nuM); 
		localStorage.removeItem('minutes'+nuM);
}
	// При клике по кнопке Отключить на вспл окне
	$('.alrBTOFF').click(function(){
		$('#dim2').fadeOut();
		var tN = $(this).attr('alt');
		
		switch (tN) {
				case '1':
                turnAlarmOff('1');
				break   
                case '2':
                turnAlarmOff('2');
				break
                case '3':
                turnAlarmOff('3');
				break
                case '4':
                turnAlarmOff('4');
				break
                default:
				//selectStyle(1);
            }
	});
	
	
   
	// Секундомер
	$('.secSTR').toggle(function(){
		$(this).val('STOP');
		var startTime = new Date().getTime(),
			runningTime = 0;
		stopwatchInterval = setInterval(function () {
			var stopwatchTime = (new Date().getTime() - startTime + runningTime);
	$('.secTXT').text(returnFormattedToMilliseconds(stopwatchTime));
    	}, 100);
	}, function(){
		$(this).val('START');
		clearInterval(stopwatchInterval);
	});
	
	// форматируем вывод секундомера
	function returnFormattedToMilliseconds(time){
		var milliseconds = Math.floor((time % 1000) / 100),
			seconds = Math.floor((time/1000) % 60),
			minutes = Math.floor((time/(1000*60)) % 60),
			hours = Math.floor((time/(1000*60*60)) % 24);

		seconds = seconds < 10 ? '0' + seconds : seconds;
		minutes = minutes < 10 ? '0' + minutes : minutes;


		return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
	};
	
	
	// Таймер
	var stopTime;
	$('.points').change(function(){
		var newTime = $(this).val().trim();	
	    if(newTime > 0){$('.timSTR').removeAttr('disabled');}		
	});
	
    $('.timSTR').toggle(function seki(){
		$('.timTXT').fadeOut();
		$(this).val('RESET');
		var startTimer = $('.points').val();
		if(startTimer > 0) {
			timerTime = startTimer * 60;
			$('.timTIM').fadeIn();
			stopTime = setInterval(function () {
				$('.timTIM').text(returnFormattedToSeconds(timerTime));
				timerTime--;
				if (timerTime <= 0) {
					$('.timTIM').fadeOut();
					$('.timTXT').fadeIn();
					clearInterval(stopTime);
					alarmSoundT.play();
					$(this).val('RESET');
				}
    		}, 1000);
		} else {
			$('#message').css('color','#F44336').animate({opacity:'1'}, 1000).text("Установите время таймера!").animate({opacity:'0'}, 4000);
			$(this).val('START');
			$('.timTXT').fadeIn();
		}
		
	}, function(){
		$(this).val('START');
		clearInterval(stopTime);
		alarmSoundT.pause();
		alarmSoundT.currentTime = 0;  
		$('.timTIM').fadeOut();
		$('.timTXT').fadeIn();		
	});
	
	// Форматируем вывод секунд в таймере
	function returnFormattedToSeconds(time){
		var minutes = Math.floor(time / 60),
			seconds = Math.round(time - minutes * 60);
		seconds = seconds < 10 ? '0' + seconds : seconds;
		return minutes + ":" + seconds;
	}
	
	
	// Full Screen
	$('#fullscreen').toggle(function(){
		// Find the right method, call on correct element
		function launchFullScreen(element) {
		  if(element.webkitRequestFullScreen) {
			element.webkitRequestFullScreen();
		  } 
		}

		// Launch fullscreen for browsers that support it!
		launchFullScreen(document.documentElement); // the whole page
		//launchFullScreen(document.getElementById("content")); // any individual element
	},
	function(){
		// Whack fullscreen
		function cancelFullscreen() {
		  if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		  } 
		}

		// Cancel fullscreen for browsers that support it!
		cancelFullscreen();
	});
	
	// И последнее
	// Это нотификации
		Notification.requestPermission(function(permission){
		// переменная permission содержит результат запроса
		//console.log('Результат запроса прав:', permission);
		});
	
	function ntA1(){
		var notification1 = new Notification("Будильник 1",
		{ body: localStorage.getItem('hours1')+":"+localStorage.getItem('minutes1'), dir: 'auto', icon: 'img/icon/ic_notifications_active_black_48dp_1x.png' } 
		);
		clearInterval(alarmInterval1);
	};

	function ntA2(){
		var notification2 = new Notification("Будильник 2",
		{ body: localStorage.getItem('hours2')+":"+localStorage.getItem('minutes2'), dir: 'auto', icon: 'img/icon/ic_notifications_active_black_48dp_1x.png' }
		);
		clearInterval(alarmInterval2);
	};
	
	function ntA3(){
		var notification3 = new Notification("Будильник 3",
		{ body: localStorage.getItem('hours3')+":"+localStorage.getItem('minutes3'), dir: 'auto', icon: 'img/icon/ic_notifications_active_black_48dp_1x.png' }
		);
		clearInterval(alarmInterval3);
	};
	
	function ntA4(){
		var notification4 = new Notification("Будильник 4",
		{ body: localStorage.getItem('hours4')+":"+localStorage.getItem('minutes4'), dir: 'auto', icon: 'img/icon/ic_notifications_active_black_48dp_1x.png' }
		);
		clearInterval(alarmInterval4);
	};
	
	// End Notifer
	
	
});// Конец скрипта

	
	
