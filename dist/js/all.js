$(document).ready(function() {

  // Animation class
   $('.animJs').animated("fadeInUp","fadeOutDown");
   $('.content-box, .button_anim, .form-box_anim').animated("fadeInUp","fadeOutDown");

  // Slider 
  $('.section-cont__slick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true
  });
  // Sandwitch
  $('.menu__sandwitch').click(function(event) {
    $(this).toggleClass('active');
    $('.menu_mobile').toggleClass('active');
  });

  $('.section-main__links').slick({
    infinite: true,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToShow: 9,
    slidesToScroll: 9,
  });

});

