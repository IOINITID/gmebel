//slick-one
$('.slider-one').slick({
  arrows: false,
  dots: true
});
//slick-two
$('.slider-two').slick({
  arrows: true,
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1
});
//slick-three
$('.slider-three').slick({
  arrows: true,
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1
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


