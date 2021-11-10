$(document).ready(function(){
  $('.feedback-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    autoplay: true ,
    responsive: [

    
      {
        breakpoint: 990,
        settings: {
        	dots: false,
        	slidesToShow: 2
        }
      }

    ] ,

  });
});