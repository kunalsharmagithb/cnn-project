
const iconBox = document.querySelector('.icn-box');
const sidebarContainer = document.querySelector('.sidebarcontainer');
const closeicon = document.querySelector(".closedicon");
iconBox.addEventListener('click', () => {
  iconBox.classList.toggle('active'); 
  if (iconBox.classList.contains('active')) {
    sidebarContainer.style.display = 'inline';
  } else {
    sidebarContainer.style.display = 'none';
  }
});
closeicon.addEventListener('click',()=>{ 
    sidebarContainer.style.display= 'none';
})

// essential js for hero js
    var swiper = new Swiper(".heroslider", {
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
  var swiper = new Swiper(".webstory-mySwiper", {
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
    });
// recent news swiper js 
  var swiper = new Swiper(".recentnews-mySwiper", {
      slidesPerView:5,
      spaceBetween: 21,
      navigation: {
        nextEl: ".recentnewsswiper-button-next",
        prevEl: ".recentnewsswiper-button-prev",
      },
    });
// vediocomp swiper js 

  var swiper = new Swiper(".vediocomp-mySwiper", {
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

 var swiper = new Swiper(".footer-mySwiper", {
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
    });

// horoscope slider js 
  var swiper = new Swiper(".horoscope-mySwiper", {
      slidesPerView:6,
      spaceBetween: 21,
      navigation: {
        nextEl: ".horoscopeswiper-button-next",
        prevEl: ".horoscopeswiper-button-prev",
      },
    });

    // list component 