jQuery(function(){
  var owlenh = jQuery('.main-slider');
  owlenh.owlCarousel({
      	items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
	});

  var owlenh = jQuery('.channel-slider');
  owlenh.owlCarousel({
    loop:true,
    margin:10,
     // nav:true,
     // navText: [
     //        "<i class='glyphicon glyphicon-menu-left'></i>",
     //        "<i class='glyphicon glyphicon-menu-right'></i>"
     //    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

	});

  var owlenh = jQuery('.inner-slider');
  owlenh.owlCarousel({
      	items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        smartSpeed: 1000
	});
  

 var owlenh = jQuery('.prog-slider');
  owlenh.owlCarousel({
    loop:true,
    margin:10,
     nav:true,
     navText: [
            "<i class='glyphicon glyphicon-menu-left'></i>",
            "<i class='glyphicon glyphicon-menu-right'></i>"
        ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

	});
 });

jQuery(document).ready(function($) {
		$(".scroll").click(function(event){
			event.preventDefault();
			$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
		});
		$().UItoTop({ easingType: 'easeOutQuart' });
	});