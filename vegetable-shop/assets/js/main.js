console.log("file access");

//Banner slider
var swiper = new Swiper(".hero__wrap", {
  // Install Plugin To Swiper
  spaceBetween: 100,
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Enable debugger
  debugger: true,
});
