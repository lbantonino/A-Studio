// slider logo marques clients
let swiper = new Swiper(".mySwiper", {


  watchSlidesProgress: true,
  loop: true,
  slidesPerView: 4, 
  centeredSlides: true, 
  autoplay: {
    delay: 700,
  },
  breakpoints: {

  },
  });


  //

  AOS.init();


////////////////////////

// SLIDER CLIENTS
//Slider photos
const swiperPhotos = new Swiper(".mySwiperPhotos", {
  pagination: {
    el: ".swiper-pagination",
  },
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: 1, 
  centeredSlides: true, 
  autoplay: {
    delay: 4000,
  },
  breakpoints: {
  },
});


// slider text
let mySwiperText = new Swiper(".mySwiperText", {
  pagination: {
    el: ".pagination-container",
    clickable: true,
  },

  spaceBetween: 30, // Espace entre les diapositives
  loop: true, // Activer la boucle
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchSlidesProgress: true,
  loop: true,
  slidesPerView: 1, 
  centeredSlides: true, 
  autoplay: {
    delay: 4000,
  },
  breakpoints: {

  },
});