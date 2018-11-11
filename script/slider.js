var slides = document.getElementsByClassName('slider_item');
var dots = document.getElementsByClassName('slider_dot');
var currentSlide = 0;
showSlide(0);

function showSlide( num ){

	if( num >= slides.length ){
		num = 0;
	}

	if( num < 0 ){
		num = slides.length-1;
	}

	currentSlide = num;

	for(var i=0; i<slides.length; i++){
		slides[i].style.display = "none";
		dots[i].classList.remove('slider_dot_active');
	}

	slides[ num ].style.display = "flex";
	dots[ num ].classList.add('slider_dot_active');

}

function clickRight(){
	currentSlide++;
	showSlide( currentSlide );
}

function clickLeft(){
	currentSlide--;
	showSlide( currentSlide );
}

