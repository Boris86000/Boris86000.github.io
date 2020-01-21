
$(document).ready(function(){
  $('.one-time').slick({
  infinite: true,
  speed: 400,
  slidesToShow: 5,
  slidesToScroll:5,
  adaptiveHeight: true,
  arrows: true,
  });
});

$('.js-tab-trigger').on('click', function() {
   var tabName = $(this).data('tab'),
      tab = $('.js-tab-content[data-tab="'+tabName+'"]');
   
   $('.js-tab-trigger.active').removeClass('active');
   $(this).addClass('active');
   
   
   $('.js-tab-content.active').removeClass('active');
   tab.addClass('active');
});


     