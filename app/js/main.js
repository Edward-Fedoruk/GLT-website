$(document).ready(function() {
  var $menu = $("#my-menu").mmenu({
    "extensions": [
      "position-right",
      "theme-dark",
      "fx-menu-fade",
      "fx-panels-none",
      "fx-listitems-slide",
      "custom-width"
    ]
 });
  var $icon = $("#my-icon");
  var API = $menu.data( "mmenu" );
  
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
});