function showMenu(){
 document.getElementById('menu').style.display = 'flex';
}

function hideMenu(){
 document.getElementById('menu').style.display = 'none';
}

function toggleMenu(){
 var menu = document.getElementById('menu');

 if( menu.style.display == 'flex' ){
     menu.style.display = "none";
 }else{
     menu.style.display = "flex";
 }
}

$('#menu_img').click(function(){
    $('#menu').animate({
        height: 'toggle',
        opacity: 'toggle'
    });
});

window.onclick = function( event ){
    var img = document.getElementById('menu_img');
    var menu = document.getElementById('menu');

    if( event.target != img && event.target != menu ){
        menu.style.display = "none";
    }
}

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    /*
    * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    * dn - определяем положение блока на странице
    */
    
    $('html, body').animate({scrollTop: dn}, 800);
    
    /*
    * 1000 скорость перехода в миллисекундах
    */
  });
});