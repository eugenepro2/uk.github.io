import objectFitImages from 'object-fit-images';
import modal from 'jquery-modal';

objectFitImages();


//pop-up
$('[rel="modal:open"]').on('click', function(event) {
  $(this).modal({
    fadeDuration: 200
  });
  return false;
});



//toolbar
$('.toolbar a').on('click', function() {
  $('.toolbar__content').slideToggle();
});

//page scroll
let step1 = $('.step-1');
let step2 = $('.step-2');
let step3 = $('.step-3');

$('body').on('click', '.step-1__start', function(event) {
  event.preventDefault();
  step1.css({'right' : '100%'});
  step2.css({'right' : '0'});
});




//переход с 3 на 2 страницу
$('body').on('click', '.step-3__prev', function(event) {
  event.preventDefault();
  step3.css({'right' : '-100%'});
  step2.css({'right' : '0'});
  $('.step-2__next').fadeIn();
  step2.removeClass('hover');
});

//hover step-3
$('.step-3__prev').hover(function() {
  step2.addClass('hover');
});
$('.step-3 .container, .step-2').hover(function() {
  step2.removeClass('hover');
});
