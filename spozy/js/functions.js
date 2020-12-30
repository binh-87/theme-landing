jQuery(document).ready(function ($) {
    "use strict"; // Start of use strict

    $(document).on('click', 'a.backtotop', function (e) {
        $('html, body').animate({scrollTop: 0}, 800);
        e.preventDefault();
    });

    $("#demos .s-nav li a").click(function () {
        console.log($(this).attr("data-id"));
        $("#demos .s-nav li").removeClass("active");
        $(this).parent().addClass("active");
        $("#demos .item").hide();
        $("#demos .item." + $(this).attr("data-id")).show();
        return false;
    });

    $.fn.skin_count = function () {
        $(this).each(function () {
            var $main = $(this);
            $main.html($(".demo." + $main.parent().attr("data-id")).length);
        });
    };

    // scroll function
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if( $(window).width() > 1499 ){
          if (scroll >= 1000) {
              $('.header').addClass('is-sticky');
              $('.backtotop').addClass('show');
          } else {
              $('.header').removeClass('is-sticky');
              $('.backtotop').removeClass('show');
          }
      } else {
          if (scroll >= 730) {
              $('.header').addClass('is-sticky');
              $('.backtotop').addClass('show');
          } else {
              $('.header').removeClass('is-sticky');
              $('.backtotop').removeClass('show');
          }
      }
    });

    $('.shops .inner').owlCarousel({
        items : 1,
        margin : 30,
        loop : true,
        autoplay : true,
        autoplaySpeed : 2000,
        autoplayTimeout : 3000,
        autoplayHoverPause : true,
        dots : true,
    });

    $('.pages .inner').owlCarousel({
        items : 3,
        margin : 30,
        loop : true,
        autoplay : true,
        autoplaySpeed : 1000,
        autoplayTimeout : 3000,
        autoplayHoverPause : true,
        dots : true,
        responsiveClass : true,
        responsive : {
            0 : {
                items : 1
            },
            480 : {
                items : 2
            },
            992 : {
                items : 3
            }
        }
    });

    $(document).on('click','.button-click',function (e) {
       var $url = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($url).offset().top
        }, 'slow');
        e.preventDefault();
    });

    // load function
    $(window).load(function() {
        $('.demo-count').html($('.demo').length);
    });

    // resize function
    $(window).on("resize", function() {

    });

    window.addEventListener("load", function load() {
        /**
         * remove listener, no longer needed
         * */
        window.removeEventListener("load", load, false);
        /**
         * start functions
         * */
        if ($('.skin-count').length) {
            $('.skin-count').skin_count();
        }
    }, false);
});
