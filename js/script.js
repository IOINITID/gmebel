//slick-one
$('.slider-one').slick({
  arrows: false,
  dots: true,
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    }
  }]
});
//slick-two
$('.slider-two').slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }]
});
//slick-three
$('.slider-three').slick({
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }]
});
//slick-four
$('.slider-four').slick({
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 577,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false
    }
  }]
});
// mobile menu
$('.btn_mobile').on('click', function () {
  $('#menu').show('drop', 300, function () {
    $('#panel').addClass('blur');
  });
  $('#panel').addClass('menuOpen');
});
// mobile menu
$('#mMenuClose').on('click', function () {
  $('#menu').hide('drop', 300, function () {
    $('#panel').removeClass('menuOpen')
  });
  $('#panel').removeClass('blur');
});
//popup
$('.header__link-icon').on('click', function () {
  $('.popup').toggle('show');
});
//fixed header
window.addEventListener('scroll', function () {
  if (pageYOffset >= 300) {
    document.querySelector('.header').classList.add('header-sticky');
  } else {
    document.querySelector('.header').classList.remove('header-sticky');
  }
});
