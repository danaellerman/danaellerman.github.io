$(document).ready(function(){
  var $banner = $('#banner');

  $('.modal-trigger').leanModal();

  $('#banner-close').click(function() {
    $banner.fadeOut();
  });
});
