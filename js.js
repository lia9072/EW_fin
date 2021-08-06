$(document).ready(()=>{

    var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.menu').addClass('menu-fixed');
			$('.menu').style='#000'
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
    

    $('.carousel').slick({       
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'       
      });



})