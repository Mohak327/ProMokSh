// Animations init
new WOW().init();
// Carousel options

$(function () {
  $('#login').click(function () {
    $('#loginModal').modal('show');
  });

  $('#reserve').click(function () {
    $('#reservation').modal('show');
  });

  $('#signup-btn').click(function () {
    $('#loginModal').modal('hide');
    $('#signup').modal('show');
  });
});

$('#carousel-example-1z').carousel({ interval: 2000 });
$('#carouselButton').click(function () {
  if ($('#carouselButton').children('span').hasClass('fa-pause')) {
    $('#carousel-example-1z').carousel('pause');
    $('#carouselButton').children('span').removeClass('fa-pause');
    $('#carouselButton').children('span').addClass('fa-play');
  } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
    $('#carousel-example-1z').carousel('cycle');
    $('#carouselButton').children('span').removeClass('fa-play');
    $('#carouselButton').children('span').addClass('fa-pause');
  }
});
