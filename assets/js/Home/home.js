let swiper = new Swiper(".mySwiper",{
    loop:true,
})


function openTabMenu(evt, TabMenu) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(TabMenu).style.display = "block";
    evt.currentTarget.className += " active";

  
  }


var swiper1 = new Swiper("#tab-menu .mySwiper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    autoplay: {
      delay: 2000,
      
    },

  });
  
  var swiper2 = new Swiper("#tab-menu .mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      
    },
   
  });
  
  var swiper3 = new Swiper("#tab-menu .mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2000,
      
    },
 
  });
  
  var swiper4 = new Swiper("#tab-menu .mySwiper4", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
  
    autoplay: {
      delay: 2000,
      
    },
  });


$('.brands-slider').slick({

    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow: false,
      nextArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

  

$(function (){
  
  let scrollSection = document.getElementById("scrol-area")
   
  window.onscroll = function () {scrollFunction()};

  function scrollFunction(){
    if (document.body.scrollTop > 195 || document.documentElement.scrollTop > 195) {
       scrollSection.style.top = "0";    
   } else {
      scrollSection.style.top = "-77px";
      scrollSection.classList.remove("visibl");
   }
  }


});




