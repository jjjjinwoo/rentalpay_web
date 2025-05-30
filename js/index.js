"use strict";

/* 스크롤 트리거 적용 */

gsap.registerPlugin(ScrollTrigger);

/* 헤더 : 메뉴 버튼 */

const menuPopupWeb = document.querySelector("header .header_box .menu_popup_web");
const menuPopupMob = document.querySelector(".menu_popup_mob");

document.querySelector("header .header_box nav .menu_btn").addEventListener("click",function(){
  if(window.innerWidth > 1024){
    if(menuPopupWeb.classList.contains("on")){
      menuPopupWeb.classList.remove("on");
    }else{
      menuPopupWeb.classList.add("on");
    }
  }else if(window.innerWidth <= 1024){
      menuPopupMob.classList.add("on");
  }
})

document.querySelector(".menu_popup_mob .top .close_btn").addEventListener("click",function(){
  menuPopupMob.classList.remove("on")
})

/* 헤더 : 스크롤 내릴 시 이벤트 숨김 */

window.addEventListener("scroll",function(){
  console.log(window.scrollY)
  if(window.scrollY > 50){
    document.querySelector("header").classList.add("hide")
  }else{
    document.querySelector("header").classList.remove("hide")
  }
})

/* 섹션3 : swiper */

var swiper = new Swiper(".section_3 .pay_step", {
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchRatio: 0
});

/* 섹션3 : 페이지네이션 연결 */

const sec3_pagination = document.querySelectorAll(".section_3 .pay_step .swiper-pagination .swiper-pagination-bullet");
const sec3_pagination_copy = document.querySelectorAll(".section_3 .pay_step .process_box > div > .pagination_circle");

document.querySelectorAll(".section_3 .pay_step .swiper-wrapper .button_box > div").forEach(function(element){
  element.addEventListener("click", function(){
    for(var i = 0; i < sec3_pagination.length; i++ ){
      if(sec3_pagination[i].classList.contains("swiper-pagination-bullet-active")){
        sec3_pagination_copy.forEach(function(element){
          element.parentElement.classList.remove("on")
        })
        sec3_pagination_copy[i].parentElement.classList.add("on")
      }
    }
  })
})

/* 섹션5 : swiper */

var swiper = new Swiper(".section_5 .mockup_box.mob", {
  slidesPerView: "auto",
  spaceBetween: 8
});

/* ==============================스크롤 트리거============================== */

gsap.to(".section_1", {
  scrollTrigger: {
    trigger: ".section_1",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec1Ani,
  },
});

function sec1Ani() {
  setTimeout(() => {
    document.querySelector(".section_1 .img_box").classList.add("scroll")
  }, 0);
  setTimeout(() => {
    document.querySelector(".section_1 .text_box").classList.add("scroll")
  }, 300);
  setTimeout(() => {
    document.querySelector(".add_text_box").classList.add("scroll")
  }, 600);
}

gsap.to(".section_2", {
  scrollTrigger: {
    trigger: ".section_2",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec2Ani,
  },
});

function sec2Ani() {
  document.querySelector(".section_2 .img_box").classList.add("scroll")
  setTimeout(() => {
    document.querySelector(".section_2 .text_box").classList.add("scroll")
  }, 300);
}

gsap.to(".section_3", {
  scrollTrigger: {
    trigger: ".section_3",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec3Ani,
  },
});

function sec3Ani() {
  document.querySelector(".section_3 .title").classList.add("scroll")
  setTimeout(() => {
    document.querySelector(".section_3 .pay_step").classList.add("scroll")
  }, 300);
}

gsap.to(".section_4", {
  scrollTrigger: {
    trigger: ".section_4",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec4Ani,
  },
});

function sec4Ani() {
  document.querySelector(".section_4 .img_box").classList.add("scroll")
  setTimeout(() => {
    document.querySelector(".section_4 .text_box").classList.add("scroll")
  }, 300);
}

gsap.to(".section_5", {
  scrollTrigger: {
    trigger: ".section_5",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec5Ani,
  },
});

function sec5Ani() {
  document.querySelector(".section_5 .wrapper").classList.add("scroll")
}

gsap.to(".section_6", {
  scrollTrigger: {
    trigger: ".section_6",
    start: "50% 100%",
    end: "50% 100%",
    onEnter: sec6Ani,
  },
});

function sec6Ani() {
  document.querySelector(".section_6 .title").classList.add("scroll")
  setTimeout(() => {
    document.querySelector(".section_6 .reason_box").classList.add("scroll")
  }, 300);
}
