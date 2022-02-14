var $carousel

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
  $carousel = $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
  })

  for (let index = 0; index < 3; index++) {
    $('.slider-dot').append(
      `<span data-my-element="dotted" id="${index}" class="dot" data-index="${index}"></span>`
    )
  }
}

function initEvents() {
  $('.next').on('click', function () {
    $carousel.flickity('next')
  })
  $('.prev').on('click', function () {
    $carousel.flickity('previous')
  })
  $('.dot').on('click', function () {
    for (let index = 0; index < 3; index++) {
      $('.dot.active').removeClass('active')
    }
    const index = $(this).data('index')
    $carousel.flickity('select', index)
  })
}

$(document).ready(function () {
  showSlides()
  headerScroll()
  initEvents()
})
