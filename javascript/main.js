// Swiper JS
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true ,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
})





// Nav
const body =document.querySelector("body"),
nav = document.querySelector("nav"),
searchToggle =document.querySelector(".searchToggle"),
sidebarOpen =document.querySelector(".sidebarOpen"),
sidebarClose =document.querySelector(".sidebarClose");

// js code to toggle search-box
searchToggle.addEventListener("click", ()=>{
    searchToggle.classList.toggle("active");
    body.classList.toggle("x-icon")
});


// js code to toggle sidebar
sidebarOpen.addEventListener("click", ()=>{
   nav.classList.add("active");
   body.style.overflowY = "hidden";
})

body.addEventListener("click", e =>{
 let clickedElm = e.target;

 if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu-content")){
   nav.classList.remove("active");
   body.style.overflowY = "scroll";
  }
});

//product
const productContainers= [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn =  [...document.querySelectorAll('.pre-btn')];

  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth =  containerDimensions.width;
  
    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
  })










   





   