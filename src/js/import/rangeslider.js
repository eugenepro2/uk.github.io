import range from 'ion-rangeslider';


$('#range').ionRangeSlider({
  grid: true,
  grid_margin: true,
  grid_num: 8,
  from: 3,
  prettify_enabled: true,
  postfix: ' km',
  values: [ '40', '60', '90', '100', '110', '500', '800'],
});
