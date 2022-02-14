function headerScroll() {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 0) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  })
}

function showSlides() {
  var $carousel = $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
  })
  $('.next').on('click', function () {
    $carousel.flickity('next')
  })
  $('.prev').on('click', function () {
    $carousel.flickity('previous')
  })
}

$( document ).ready(function() {
 showSlides();
 headerScroll();
});

