$(document).ready(function() {

  $('.promo__slider,.promo__nav,.offers__slider').on('init', function(event, slick){
   AOS.init({
    disable: function () {
      maxWidth = 750;
      return window.innerWidth < maxWidth;
    },
    once: true
  });
 });

  // mobile-menu
  $('.burger').click(function() {
    $('.mobile').toggleClass('mobile-active');
    $('body').toggleClass('overlay');
  });
  $('.close-btn').click(function() {
    $('.mobile').toggleClass('mobile-active');
    $('body').toggleClass('overlay');
  });

  $(document).mouseup(function (e){
    if (!$('.mobile').is(e.target)
      && $('.mobile').has(e.target).length === 0) {
      $('.mobile').removeClass('mobile-active');
    $('body').removeClass('overlay');
  } 
});

  // slick slider
  $('.promo__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    asNavFor: '.promo__nav'
  });
  $('.promo__nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    focusOnSelect: true,
    asNavFor: '.promo__slider',
    responsive: [
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    },
    {
      breakpoint: 1060,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false
      }
    }
    ]
  });

  $('.offers__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: false,
    centerMode: true,
    centerPadding: '160',
    infinite: true,
    responsive: [
    {
      breakpoint: 1030,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '80px',
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        centerMode: false,
        dots: true
      }
    }
    ]
  });

  // button tick animation
  var button = $('.btn__tick-wrap .btn');
  var container = $('.btn__tick-wrap');
  var checkmark = $('.btn__tick svg');
  var className = "animate";
  console.log(container)

  button.click(function(){
    if (!checkmark.hasClass(className)) {
      checkmark.addClass(className);

      setTimeout(function(){      
        checkmark.removeClass(className);
      }, 1700);  
    } 
  });

  // alignment of cards in height

  $('.catalog__item-content-top, .wrap-stock').matchHeight();
  $('.price__block').matchHeight();
  $('.catalog__item, .catalog__itemLg').matchHeight();
  $('.catalog__item h5, .catalog__itemLg h5').matchHeight();
  $('.catalog__itemLg-top, .catalog__item-img').matchHeight();

  // parallax effects

  // $('.promo').on('mousemove', function(e) {
  //   var x = e.pageX / $(window).width();
  //   var y = e.pageY / $(window).height();

  //   $('.promo__img').css(
  //     'transform',
  //     'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
  //     );
  // });

});






