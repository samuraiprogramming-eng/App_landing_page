
/*-------------------------------------------------------------------------------------
----------- [Table of Content] --------------

01. Preloader
02. Navbar Shrink
03. Video Popup
04. Features Carousel
05. Screenshots Carousel
06. Testimonial Carousel
07. Team Carousel
08. Page Scrolling 
09. Navbar Collapse
10. Toggle Theme - Light &  Dark Mode
-------------------------------------------------------------------------------------
*/
 

 $(window).on("load",function() {
 	/*------------------ 01. Preloader -----------------*/ 
 	$(".preloader").fadeOut("slow");
 });

 $(document).ready(function() {
 	/*-------------- 02. Navbar Shrink -------------------*/
 	$(window).on("scroll",function(){
      if($(this).scrollTop() > 90){
      	$(".navbar").addClass("navbar-shrink");
      }
      else{
      	$(".navbar").removeClass("navbar-shrink");
      }
 	});

    /*----------------- 03. Video Popup -------------------*/
    const videoSrc = $("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click", function(){
       if($(".video-popup").hasClass("open")){
         $(".video-popup").removeClass("open");
         $("#player-1").attr("src","");
       }
       else{
         $(".video-popup").addClass("open");
         if($("#player-1").attr("src")==''){
            $("#player-1").attr("src",videoSrc);
         }
       }
    });
    
    /* ------------------------ 04. Features Carousel ----------------- */
    $('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
   });
   
    /* ------------------------ 05. Screenshots Carousel ----------------- */
    $('.screenshots-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
   });

   /* ------------------------ 06. Testimonials Carousel ----------------- */
    $('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
   });
/* ------------------------ 0.7 Team Carousel ----------------- */
    $('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
   });
   /*-------------------- 08. Page Scrolling - ScrollIt ---------------------*/ 
    $.scrollIt({
    	topOffset: -50
    });

    /*--------------------- 09. Navbar Collapse --------------------------*/
    $(".nav-link").on("click", function(){
       $(".navbar-collapse").collapse("hide");
    });

    /*------------------- 10. Toggle Theme - Light & Dark Mode ----------------*/ 
    function toggleTheme(){
       if(localStorage.getItem("shala-theme") !== null){
       	  if(localStorage.getItem("shala-theme") === "dark"){
             $("body").addClass("dark");
       	  }
       	  else{
            $("body").removeClass("dark");
       	  }
       }
      updateIcon();
    }
    toggleTheme();

    $(".toggle-theme").on("click",function(){
      $("body").toggleClass("dark");
      if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark");
      }
      else{
        localStorage.setItem("shala-theme","light");
      }
      updateIcon();
    });
    function updateIcon(){
       if($("body").hasClass("dark")){
         $(".toggle-theme i").removeClass("fa-moon");
         $(".toggle-theme i").addClass("fa-sun");
       }
       else{
         $(".toggle-theme i").removeClass("fa-sun");
         $(".toggle-theme i").addClass("fa-moon");
       }
    }

 });

