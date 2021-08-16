$(document).ready(function(){
  // click phone//
  
 $('.fa-phone').click(function(){
   $('span').toggle();
   });
   
   // hide logo//
   
   $('.coling, .fa-phone').mouseenter(function(){
     $('.logo').hide();
   });
   
   // show logo///
   
   $('.coling, .fa-phone').mouseleave(function() {
     $('.logo').show();
   });
   
   // navbar///
   
   $('.fa-bars').click(function(){
     $('.navbar').toggle();
     $(this).toggleClass('fa-times');
   });
   
   // hide navbar//
   $('.navbar, .navbar a').click(function(){
     $('.navbar').hide();
     $('.fa-bars').removeClass('fa-times');
   });
   
   // scroll header///
   
   $(window).on('scroll load', function(){
     if($(window).scrollTop() > 20){
       $('header').css({
         "background":"#0779E4",
         "box-shadow":"0 5px 7px 0 4px 3px rgba(250,250,250,0.1)"
       });
     }
   });
   /// cheng photo//
   $('.chack-img img').click(function(){
     $(this).addClass('activeImg').siblings().removeClass('activeImg');
     let imge = $(this).attr('src');
     $('.big-img img').attr('src', imge);
   });
   // scroll ///
   $(window).scroll(function() {
     if ($(window).scrollTop() >= 200) {
       $('.scrol').show();
     } else {
       $('.scrol').hide();
     }
   });
   
});
