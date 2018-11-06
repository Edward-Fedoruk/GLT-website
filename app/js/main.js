function setMmenu() {
  var $menu = $("#my-menu").mmenu({
    "extensions": [
      "position-right",
      "theme-dark",
      "fx-menu-fade",
      "fx-panels-none",
      "fx-listitems-slide",
    ]
  })

  const $icon = $("#my-icon")
  const API = $menu.data( "mmenu" )
  
  $icon.on( "click", function() {
      API.open()
  })
  
  API.bind( "open:finish", function() {
      setTimeout(function() {
        $icon.addClass( "is-active" )
      }, 100)
  })
  
  API.bind( "close:finish", function() {
      setTimeout(function() {
        $icon.removeClass( "is-active" )
      }, 100)
  })
}

function setAOS() {
  AOS.init({
    offset: 300,
    duration: 700,
    once: true
  })
}

function setLighGallery() {
  $(".work__lightgallery").lightGallery()
}

function setSlick() {
  $('.clients__brandSlider').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  })

  $('.clients__saySlider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      }
    ]
  })
}



const addClassOnScroll = 
  (elemHeight, elemOffset, elem) => (className, scrollY) => 
    elemOffset + elemHeight < scrollY
      ? elem.addClass(className) 
      : elem.removeClass(className)


const scrollTo = elem => e => {
  const sectionName = elem || $(e.currentTarget).attr("data-link")    
  $('html, body').animate({
    scrollTop: $(sectionName).offset().top
  }, 500)
}

$(document).ready(() => {
  setMmenu()
  setAOS()
  setSlick()
  setLighGallery()

  const menuButton = $(".header__menuWrap") 
  const aboutSection = $(".about")
  const scrollTopBtn = $(".scrollTop")
  const header = $(".mainHeader")
  const headerHeight = header.height()

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

  $(".header__menuItem").click(scrollTo(false))
  $(".mainHeader__scrollIcon").click(scrollTo(false))
  scrollTopBtn.click(scrollTo(".page"))

  $(window).scroll(e => {
    const scrollY = e.currentTarget.scrollY
    toggleMenuBG("header__menuWrap-bg",scrollY)   
    toggleScrollTop("scrollTop-visible", scrollY)
    
    if(headerHeight > e.currentTarget.scrollY)
      header.css("background-position", `0px ${scrollY / 2}px`)
  })
})