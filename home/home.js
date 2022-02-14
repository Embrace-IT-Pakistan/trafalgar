// var slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n) {
//   showSlides((slideIndex += n))
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n))
// }

function showSlides() {
// var slides = document.getElementsByClassName("main-carousel");
//   var dots = document.getElementsByClassName("dot");
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
// }  
//   dots[slideIndex-1].className += " active";
  
  $(window).scroll(function () {
    var scroll = $(window).scrollTop()
    if (scroll > 0) {
      $('.header').addClass('active')
    } else {
      $('.header').removeClass('active')
    }
  })
  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
  })
  var $carousel = $('.main-carousel').flickity()
  $('.next').on('click', function () {
    $carousel.flickity('next')
  })
  $('.prev').on('click', function () {
    $carousel.flickity('previous')
  })
}
$( document ).ready(function() {
 showSlides();
});
