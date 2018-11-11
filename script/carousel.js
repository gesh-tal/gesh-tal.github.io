$(document).ready(function() {
 
  $("#carousel").owlCarousel({
 
      autoPlay: 3500, //Set AutoPlay to 3 seconds
 
      items : 1,
      itemsDesktop : [1000,2],
      itemsDesktopSmall : [900,2],
      itemsTabletSmall : [600,2],
      transitionStyle : 'fade'
 
  });
});