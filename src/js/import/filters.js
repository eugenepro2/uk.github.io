
//фильтр, разварачивается все опции
$('.filter__btn__options a').on('click', function(event) {
  event.preventDefault();
  $(this).toggleClass('active');
  $('.filter__options__hidden').slideToggle();
  $('.filter__options__visible').toggleClass('active');
});



//фильтр квартира при нажатии
let btn = $('.apartment__btn');
btn.on('click', function() {
  $('.filter__block__options').fadeToggle();
});
$(document).mouseup(function(e) {
  var block = $('.filter__block__options, .apartment__btn');
  if (!block.is(e.target) && block.has(e.target).length === 0) { 
    $('.filter__block__options').fadeOut();
  }
});
let valLabel;
$('.filter__block__options__radio label').on('click', function() {
  valLabel = $(this).attr('value');
  let relLabel = $(this).attr('rel');
  btn.find('span').text(valLabel);
  $('.filter__lodging__block').fadeOut();
  setTimeout(function() {
    $(relLabel).fadeIn();
  }, 400);
 
});

