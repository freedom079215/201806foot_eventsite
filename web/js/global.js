$(document).ready(function(){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('.menu-m-btn').click(function(){
      $(this).toggleClass('active');
      $('.menu').toggleClass('active');
    });
  };
  $('.qa-interactive-btn').click(function(){
    $('.qa-interactive-btn').removeClass('focus');
    $(this).addClass('focus');
  });
});
$(window).on("load",function() {
  $(window).scroll(function() {
    $(".bouncein").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() - 50;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).addClass('animated bounceIn').css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).removeClass('animated bounceIn').fadeTo(300,0);}
      }
    });
    $(".fadeinleft").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() - 50;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).addClass('animated fadeInLeft').css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).removeClass('animated fadeInLeft').fadeTo(300,0);}
      }
    });
    $(".fadeinright").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight() - 50;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).addClass('animated fadeInRight').css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).removeClass('animated fadeInRight').fadeTo(300,0);}
      }
    });
    $(".fadeinup").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight()/2;
      var windowBottom = $(window).scrollTop() + $(window).innerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).addClass('animated fadeInUp').css("opacity")==0) {$(this).fadeTo(300,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).removeClass('animated fadeInUp').fadeTo(300,0);}
      }
    });
  }); $(window).scroll(); //invoke scroll-handler on page-load



});
