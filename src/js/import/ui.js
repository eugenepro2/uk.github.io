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
