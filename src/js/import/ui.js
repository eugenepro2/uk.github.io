import objectFitImages from 'object-fit-images';
import modal from 'jquery-modal';
import '../lib/selectize.min.js';

//вписывает картинки
objectFitImages();
//select
let selectize = $('select').selectize();


//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});




//arrow up
$(window).scroll(function() {
  if($(this).scrollTop() >= $(window).height() / 2) {
    $('.up').fadeIn();
  } else {
    $('.up').fadeOut();
  }
});
$('.up').on('click', function(event) {
  event.preventDefault();
  $('body,html').animate({scrollTop: $('body').offset().top}, 1500);
});


//search
let posLeft = $('.header ul').offset().left;
let width = $('.header__search a').offset().left;
width = width - posLeft;
$('#search').css({'left': posLeft, 'width': width});

$('.header__search a').on('click', function() {
  $('#search').slideToggle();
  $(this).toggleClass('active');
});
