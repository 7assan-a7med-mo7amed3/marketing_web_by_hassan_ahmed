
var swiper = new Swiper(".slide-swp", {
      pagination: {
        el: ".swiper-pagination",
        dynamicBullests:true,
        clickable:true,
      },
      autoplay:{
        delay:2500,
      },
      loop:true
});

// swipe product
var swiper = new Swiper(".slide-product", {
    slidesPerView:5,
    spaceBetween:20,
     navigation:{
      nextEl:'.swiper-button-next',
      prevEl:'.swiper-button-prev'
     },
     breakpoints:{
      1200:{
        slidesPerView:5,
        spaceBetween:20,

      },
      1000:{
         slidesPerView:4,
          spaceBetween:20,
      },
      700:{
        slidesPerView:3,
          spaceBetween:15,
      },
      330:{
          slidesPerView:2,
          spaceBetween:10,
      },
      0:{
          slidesPerView:1,
          spaceBetween:10,
      }
     }

      
     
});
