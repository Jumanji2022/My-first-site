$(document).ready(function() {
	
  //sticky-nav
	var waypoint = new Waypoint({
  element: document.getElementById('restaurant-descriptions'),
  handler: function(direction) {
    if(direction === "down") {
    $("nav").attr("id", "sticky-nav");
    } else {
      $("nav").removeAttr("id",)
    }
  },
  offset: 85 
     });

  //button and nav links click 
  $(".button-order").click(function() {
    $("html, body").animate({scrollTop: $("#how-to-order-section").offset().top}, 1000);
  });

  $(".button-more").click(function() {
    $("html, body").animate({scrollTop: $("#restaurant-descriptions").offset().top}, 1000);
  });

  $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

  // animation
  var waypoint = new Waypoint({
  element: document.getElementById('restaurant-descriptions'),
  handler: function(direction) {
   $(".anim1").addClass("animated fadeInUp"); 
    },
  offset: 400
       });

var waypoint = new Waypoint({
  element: document.getElementById('cities-section'),
  handler: function(direction) {
   $(".anim2").addClass("animated fadeInUp"); 
    },
  offset: 360
       });

var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {
   $(".anim3").addClass("animated fadeInUp"); 
    },
  offset: 260
       });

var waypoint = new Waypoint({
  element: document.getElementById('how-to-order-section'),
  handler: function(direction) {
   $(".anim4").addClass("animated fadeInRight"); 
    },
  offset: 260
       });

var waypoint = new Waypoint({
  element: document.getElementById('header-text'),
  handler: function(direction) {
    if(direction === "up") {
    $(".anim5").addClass("animated jello");
    }  else {
      $(".anim5").removeClass("animated jello");
    }
  },
  offset: 60 
     });

//mobile nav
$(".mobile-nav-icon ion-icon").click(function() {

    let icon = $(".mobile-nav-icon ion-icon");

    if(icon.hasClass("menu-outline")) {
      icon.removeClass("menu-outline");
      icon.addClass("close-outline");
      $("nav").animate({height: "70px"}, 300);
       
     } else {
      icon.removeClass("close-outline");
      icon.addClass("menu-outline");
      $("nav").animate({height: "240px"}, 300);
    }

    $("#main-nav").slideToggle(300); 
  });



})






