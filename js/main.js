$(document).ready(function () {
    
    // our custom js
    
    $("#download_link_order").click(function(){
        $("#download_process").slideDown("slow");
        $("#delivery_address").slideUp("slow");
    });
    
    $("#dvd_order").click(function(){
        $("#delivery_address").slideDown("slow");
        $("#download_process").slideUp("slow");
    });
    
    
    
    $("#rocket_transfer").click(function(){
        $("#rocket_transfer_process").slideDown("slow");
        $("#bkash_transfer_process").slideUp("slow");
    });
    
    $("#bkash_transfer").click(function(){
        $("#bkash_transfer_process").slideDown("slow");
        $("#rocket_transfer_process").slideUp("slow");
    });
    
    

    // banner slider js

    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: ".banner_slider_arrow_left",
        nextArrow: ".banner_slider_arrow_right",
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        speed: 1000
    });

    // video pop up

    $('.venobox').venobox();

    // free course slider

    $('.free_course_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // premium course slider

    $('.premium_course_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll:1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }

    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // blog slider js

    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        cssEase: 'linear',
        speed: 1000,
        arrows: true,
        prevArrow: ".blog_slider_arrow_left",
        nextArrow: ".blog_slider_arrow_right",
        
    });

    // feedback slider js

    $('.feedback_slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
          responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    // wow js
    
    new WOW().init();

});