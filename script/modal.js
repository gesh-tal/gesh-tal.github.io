function showModal(){
	document.getElementById('modal').style.display = "flex";
}

function hideModal(){
	document.getElementById('modal').style.display = "none";
}

function showImageModal( imgSrc ){
	document.getElementById('mainImage').setAttribute('src', imgSrc);
	document.getElementById('modalImage').style.display = "flex";
}

function hideImageModal(){
	document.addEventListener('keyup', function(e) { 
    if (e.keyCode == 27) {
        hideImageModal();
    }
});
	document.getElementById('modalImage').style.display = "none";
}

$(document).on('keyup',function(evt) {
  if (evt.keyCode == 27) {
    location.href="#close";
  }   
});
