$(document).ready(function() {
  var $menu = $("#my-menu").mmenu({
    "extensions": [
      "position-right",
      "theme-dark",
      "fx-menu-fade",
      "fx-panels-none",
      "fx-listitems-slide",
    ]
  });

  const $icon = $("#my-icon");
  const API = $menu.data( "mmenu" );
  
  $icon.on( "click", function() {
      API.open();
  });
  
  API.bind( "open:finish", function() {
      setTimeout(function() {
        $icon.addClass( "is-active" );
      }, 100);
  });
  API.bind( "close:finish", function() {
      setTimeout(function() {
        $icon.removeClass( "is-active" );
      }, 100);
  });

  $(".work__lightgallery").lightGallery({
  }); 

  $('.clients__brandSlider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
  })

  $('.clients__saySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
  })

});