let swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
});


$(function (){
  
    let scrollSection = document.getElementById("scrol-area")
     
    window.onscroll = function () {scrollFunction()};
  
    function scrollFunction(){
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollSection.style.top = "0";    
     } else {
        scrollSection.style.top = "-77px";
        scrollSection.classList.remove("visibl");
     }
    }
  
  
  });