
$(document).ready(function(){
    $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      
    
  });
      //toggle menu /navbar script
      $('.menu-button').click(function(){
        //  console.log("hello")
          $('.navbar .menu').toggleClass("active");
          $('.menu-button i').toggleClass("active");
      });
     //owl carouse1 script
     $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayTimePause: true,
        responsive:{
          0:{
            items: 1,
            nav: false
          },
          600:{
            items: 2,
            nav: false
          },
          1000:{
            items:3,
            nav:false
          }
        } 
     });
  });