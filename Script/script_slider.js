"use strict";


$(document).ready(function () {
  const slider = $("#owl_slider").owlCarousel({
    center: true,
    items: 1,
    loop: true,
    margin: 20,
    nav: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    smartSpeed: 1000,
  });
});

$(document).ready(function () {
    const slider = $("#owl_slider_phone").owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 20,
      nav: true,
      mouseDrag: true,
      touchDrag: true,
      dots: false,
      smartSpeed: 1000,
    });
  });
 

  //прыжок слайдера в About
const childslider = document.querySelector("#childslider");
const parentslider = document.querySelector("#parentslider");

jQuery(($) => {
  if ($(window).width() < 950) {
    parentslider.appendChild(childslider);
  }
});

// Слайдер autoplay начало
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
const swiperEl = document.querySelector("swiper-container");
swiperEl.addEventListener("autoplaytimeleft", (e) => {
  const [time, progress] = e.detail;
  progressCircle.style.setProperty("--progress", 1 - progress);
  progressContent.textContent = `${Math.ceil(time / 100)}s`;
});

// Слайдер autoplay конец
