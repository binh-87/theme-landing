jQuery(document).ready(function ($) {
    "use strict"; // Start of use strict
    //MENU ONEPAGE
    $(".site-navigation ul a,.main-header .logo a, .header-text-content a").on( "click", function(e) {
        var url = $(this).attr("href");
        var target = $(url).offset().top; 
        $('html,body').animate({scrollTop:target -60 }, 'slow');
        return false;
      });
  
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if($(window).width()>1024){
          if (scroll >= 350) {
              $('.header-sticky').addClass('sticky-menu');
          } else {
              $('.header-sticky').removeClass('sticky-menu');
          }
          if (scroll >= 150) {
              $('.header-sticky').addClass('sticky-icon-action');
          } else {
              $('.header-sticky').removeClass('sticky-icon-action');
          }
          if (scroll >= 10) {
              $('.header-sticky').addClass('sticky-menu-transform');
          } else {
              $('.header-sticky').removeClass('sticky-menu-transform');
          }
      }
      if( scroll > 180) {
          $('.backtotop').show(300);
      } else {
          $('.backtotop').hide(300);
      };
    });  
   //BACK TO TOP
    
    $('.backtotop').on( "click", function(e) {
        $('html,body').animate({scrollTop : 0},800);
        return false;
    });
  
    /* ---------------------------------------------
     Height Full
     --------------------------------------------- */

    function kt_height_full(){
        var height = $(window).outerHeight();
        $(".full-height").css("height",height);  
    }
    function kt_width_full(){
        var width = $(window).outerWidth();
        $(".full-width").css("width",width);
    }

    function header_content_height(){
      var height = $(window).outerHeight();
      var window_width = $(window).outerWidth();
      var them  = 150;
      var top = height;
      if( window_width < 768){
        them = 50;
      }
      height = height + them;

      $(".header-content").css("height",height);  
      $(".header-content").css("margin-top",'-'+top+'px');
    }
    //Owl carousel
    function init_carousel(){
        $(".owl-carousel").each(function(index, el) {
            var config = $(this).data();
            config.navText = ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'];
            var animateOut = $(this).data('animateout');
            var animateIn  = $(this).data('animatein');
            var slidespeed = $(this).data('slidespeed');
            if(typeof animateOut != 'undefined' ){
                config.animateOut = animateOut;
            }
            if(typeof animateIn != 'undefined' ){
                config.animateIn = animateIn;
            }
            if(typeof (slidespeed) != 'undefined' ){
                config.smartSpeed = slidespeed;
            }

            var owl = $(this);
            owl.on('initialized.owl.carousel',function(event){
                var total_active = owl.find('.owl-item.active').length;
                var i            = 0;
                owl.find('.owl-item').removeClass('item-first item-last');
                setTimeout(function(){
                    owl.find('.owl-item.active').each(function () {
                        i++;
                        if (i == 1) {
                            $(this).addClass('item-first');
                        }
                        if (i == total_active) {
                            $(this).addClass('item-last');
                        }
                    });

                }, 100);
            })
            owl.on('refreshed.owl.carousel',function(event){
                var total_active = owl.find('.owl-item.active').length;
                var i            = 0;
                owl.find('.owl-item').removeClass('item-first item-last');
                setTimeout(function(){
                    owl.find('.owl-item.active').each(function () {
                        i++;
                        if (i == 1) {
                            $(this).addClass('item-first');
                        }
                        if (i == total_active) {
                            $(this).addClass('item-last');
                        }
                    });

                }, 100);
            })
            owl.on('change.owl.carousel',function(event){
                var total_active = owl.find('.owl-item.active').length;
                var i            = 0;
                owl.find('.owl-item').removeClass('item-first item-last');
                setTimeout(function(){
                    owl.find('.owl-item.active').each(function () {
                        i++;
                        if (i == 1) {
                            $(this).addClass('item-first');
                        }
                        if (i == total_active) {
                            $(this).addClass('item-last');
                        }
                    });

                }, 100);
                owl.addClass('owl-changed');
                setTimeout(function () {
                    owl.removeClass('owl-changed');
                },config.smartSpeed)
            })
            owl.on('drag.owl.carousel',function(event){
                owl.addClass('owl-changed');
                setTimeout(function () {
                    owl.removeClass('owl-changed');
                },config.smartSpeed)
            })

            owl.owlCarousel(config);

        });
    }

    /* ---------------------------------------------
     Scripts initialization
     --------------------------------------------- */
    $(window).load(function() {
      kt_height_full();
      kt_width_full();
      header_content_height();
      init_carousel();

    });
    /* ---------------------------------------------
     Scripts resize
     --------------------------------------------- */
    $(window).on("resize", function() {
      kt_height_full();
      kt_width_full();
      header_content_height();
    });
  new WOW().init();
});
