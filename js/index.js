$(function() {

  // Smooth Scroll
  $('a[href*="#"]:not([href="#"])').click(function() {
     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       var target = $(this.hash);
       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       if (target.length) {
         $('#nav-toggle-cbox').prop('checked', false);
         $('html, body').animate({
           scrollTop: target.offset().top
         }, 500);
         return false;
       }
     }
   });

});
