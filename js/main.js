var btn = document.getElementById('btn-form');
btn.onclick = function () {
	alert ('Подтвердить отправку');
}
var btn = document.getElementById('btn');
btn.onclick = function () {
	var text = document.querySelector ('p.intro');
	text.classList.add('black');
}
$(function () {
		$(window).scroll(function() {
		    $('.advantage').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInUp");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.advantage-trip').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInUp");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.advantage-bild').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInUp");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.name').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInLeft");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.email').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInRight");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.tel').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInLeft");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.text').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInRight");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.btn-form').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInLeft");
		        }
		  	});
		});
	$(window).scroll(function() {
		    $('.section-title').each(function(){
		        var imagePos = $(this).offset().top;

		        var topOfWindow = $(window).scrollTop();
		        if (imagePos < topOfWindow+650) {
		            $(this).addClass("fadeInLeft");
		        }
		  	});
		});
	})