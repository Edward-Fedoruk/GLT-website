function setUp() {
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

    
  AOS.init({
    offset: 300,
    duration: 700,
    once: true
  })
}

const addClassOnScroll = (elemHeight, elemOffset, elem) => className => {
  console.log(elemHeight, elemOffset, elem, className)
  elemOffset + elemHeight < $(window).scrollTop()
    ? elem.addClass(className) 
    : elem.removeClass(className)
}


$(document).ready(() => {
  setUp()  

  const scrollTo = elem => e => {
    const sectionName = elem || $(e.currentTarget).attr("data-link")    
    $('html, body').animate({
      scrollTop: $(sectionName).offset().top
    }, 500);
  }

  const menuButton = $(".header__menuWrap") 

  const aboutSection = $(".about")
  const scrollTopBtn = $(".scrollTop")

  $(".header__menuItem").click(scrollTo(false))
  $(".mainHeader__scrollIcon").click(scrollTo(false))
  scrollTopBtn.click(scrollTo(".page"))

  const toggleMenuBG = addClassOnScroll(
    menuButton.height(), 
    menuButton.offset().top, 
    menuButton
  )

  const toggleScrollTop = addClassOnScroll(
    0, 
    aboutSection.offset().top, 
    $(".scrollTop")
  )
  
  $(window).scroll((e) => {
    toggleMenuBG("header__menuWrap-bg")   
    toggleScrollTop("scrollTop-visible")
  })
})