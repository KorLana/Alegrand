"use strict";

// Бургер начало
$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// Бургер конец

// закрытие бургер при нажатии на ссылку
$(document).ready(() => {
  $(document).on("click", ".header_list > li > a", (e) => {
    $(".header_burger, .header_menu").removeClass("active");
    $("header").removeClass("header_conteiner_hidden");
    $("body").removeClass("lock");
  });
});

//Всплывающий header

document.addEventListener("DOMContentLoaded", () => {
  const onScrollHeader = () => {
    const header = document.querySelector(".header_conteiner");

    let prevScroll = window.scrollY;
    let currentScroll;

    window.addEventListener("scroll", () => {
      currentScroll = window.scrollY;
      const headerHidden = () =>
        header.classList.contains("header_conteiner_hidden");
      if (currentScroll > prevScroll && !headerHidden()) {
        header.classList.add("header_conteiner_hidden");
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.classList.remove("header_conteiner_hidden");
      }
      prevScroll = currentScroll;
    });
  };
  onScrollHeader();
});

