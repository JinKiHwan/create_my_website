$(document).ready(function () {
  $('.depth2').hide();

  $('.gnb>li').mouseenter(function () {
    $(this).children('.depth2').stop().slideDown();
  });

  $('.gnb>li').mouseleave(function () {
    $(this).children('.depth2').stop().slideUp();
  });

});