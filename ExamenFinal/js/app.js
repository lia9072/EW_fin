$(document).ready(function(){

	$('.mnli').mouseover(function() {
		 $(this).addClass('fondomenu');
	})
	$('.mnli').mouseout(function() {
		$(this).removeClass('fondomenu');
	})


	$(".item").hover(
		function() {
			$(this).addClass('activo')
		},
		function(){
			$(this).removeClass('activo')
		}
	);

	$(".redes i").hover(
		function() {
		$(this).addClass('cambio')		
		},
		function(){
			$(this).removeClass('cambio')
		}		
		);

		

		$('.carousel').slick({
			autoplay: true,
			autoplaySpeed: 3000
		
		  });




	rotateSlides();
})

 

var desc = new Array()
desc[0] = " NIVEL INICIAL";
desc[1] = "NIVEL  PRIMARIA";
desc[2] = "NIVEL  SECUNDARIA";
desc[3] = " NIVEL PRE UNIVERSITARIO";



function rotateSlides(){
	const imgcelu = document.querySelector('#imgcelu');
	const imgcomp = document.querySelector('#imgcomp');
	const imgvideo = document.querySelector('#imgvideo');
	const imgelectro = document.querySelector('#imgelectro');
	// contenedor padre 
	const descripcion = document.querySelector('#descripcion');
	// eventos
 	imgcelu.addEventListener('click', () => descripcion.innerHTML = desc[0])
	imgcomp.addEventListener('click', () =>descripcion.innerHTML = desc[1])
	imgvideo.addEventListener('click', () =>descripcion.innerHTML = desc[2])
	imgelectro.addEventListener('click', () =>descripcion.innerHTML = desc[3]) 
 }

