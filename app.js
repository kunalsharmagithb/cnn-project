

// essential js for hero js
    var heroswiper = new Swiper(".heroslider", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next-custom",
        prevEl: ".swiper-button-prev-custom",
      },
    });
//webstory js
  var webstoryswiper = new Swiper(".webstory-mySwiper", {
      slidesPerView:5,
      spaceBetween: 3,
      loop:true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "fraction",
      // },
      navigation: {
        nextEl: ".webstoryswiper-button-next",
        prevEl: ".webstoryswiper-button-prev",
      },
      breakpoints:{
        1024:{
            slidesPerView: 5,
         },
        768: {  
           slidesPerView: 3,
         },
        480: { 
          slidesPerView: 2,
         },
      }
    });

  //  webstorymodalswiper js 
  var webstorymodalswiper = new Swiper(".webstorymodal-mySwiper", {
      slidesPerView:1,
      spaceBetween: 31,
      loop:true,
      mousewheel:true,
      // pagination: {
      //   el: ".swiper-pagination",
      //   type: "fraction",
      // },
      navigation: {
        nextEl: ".webstorymodalswiper-button-next",
        prevEl: ".webstorymodalswiper-button-prev",
      },
      breakpoints:{
        1024:{
            slidesPerView: 1,
         },
        768: {  
           slidesPerView: 1,
         },
        480: { 
          slidesPerView: 1,
         },
      }
    });
// recent news swiper js 
  var recentnewsswiper = new Swiper(".recentnews-mySwiper", {
      slidesPerView:5,
      spaceBetween: 21,
      navigation: {
        nextEl: ".recentnewsswiper-button-next",
        prevEl: ".recentnewsswiper-button-prev",
      },
      breakpoints:{
        1024:{
            slidesPerView: 5,
         },
        768: {  
           slidesPerView: 3,
         },
        480: { 
          slidesPerView: 2,
         },
      }
    });
// vediocomp swiper js 

  var vediocompswiper = new Swiper(".vediocomp-mySwiper", {
      slidesPerView:4.5,
      spaceBetween: 5,
      direction:"vertical",
      mousewheel: true,
      autoplay: {
        delay: 5500,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: ".vediocompswiper-button-next",
        prevEl: ".vediocompswiper-button-prev",
      },
    });
// footer js 

 var footerswiper = new Swiper(".footer-mySwiper", {
      slidesPerView:3,
      spaceBetween: 21,
      autoplay:{
        delay:2500,
      },
      rewind:true,
      navigation: {
        nextEl: ".footerswiper-button-next",
        prevEl: ".footerswiper-button-prev",
      },
      breakpoints:{
        1024:{
            slidesPerView: 3,
         },
        768: {  
           slidesPerView: 3,
         },
        480: { 
          slidesPerView: 2,
         },
      }
    });

// horoscope slider js 
  var horoscopeswiper = new Swiper(".horoscope-mySwiper", {
      slidesPerView:6,
      spaceBetween: 21,
      navigation: {
        nextEl: ".horoscopeswiper-button-next",
        prevEl: ".horoscopeswiper-button-prev",
      },
      breakpoints:{
        1024:{
            slidesPerView: 6,
         },
        768: {  
           slidesPerView: 3,
         },
        480: { 
          slidesPerView: 2,
         },
      }
    });
