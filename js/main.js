// add nav js//
$(document).ready(function(){

    $('#icon').click(function(){
        $(this).toggleClass('fa-times');
        $('.menu').toggleClass('nav-toggle');
    });
  
    $(window).on('load scroll',function(){
  
      $('#icon').removeClass('fa-times');
      $('.menu').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('nav').addClass('sticky');
      }else{
        $('nav').removeClass('sticky');
      }
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
      $('section').each(function(){
  
        let top = $(window).scrollTop();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let height = $(this).height();
  
        if(top > offset && top < offset + height){
          $('.menu a').removeClass('active');
          $('.menu').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  });
// light slider // 
$(document).ready(function(){
  $('#adaptive').lightSlider({
    adaptiveHeight:true,
    auto:true,
    item:1,
    slideMargin:0,
    loop:true,
  });
});

// stylesheet-scrool-animation //
AOS.init();
// preloder //
var loader = document.getElementById("preloder");

       window.addEventListener("load", function(){
           loader.style.display ="none";
       })

    


