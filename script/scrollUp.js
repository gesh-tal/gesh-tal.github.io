
window.onscroll = function(){

	if( document.documentElement.scrollTop >= 450 ){
		document.getElementById('scrollUp').style.display = "block";
	}else{
		document.getElementById('scrollUp').style.display = "none";
	}
}

$('#scrollUp').click(function(){
	$("html, body").animate({ scrollTop: 0 });
});