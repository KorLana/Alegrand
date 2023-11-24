"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var modalButtons = document.querySelectorAll(".js-open-modal"),
    overlay = document.querySelector(".js-overlay-modal"),
    closeButtons = document.querySelectorAll(".js-modal-close");

  /* открытие окон. */
  modalButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      // $("body").toggleClass("lock");
      document.body.classList.add("js-open-modal");
      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add("active");
      overlay.classList.add("active");
    }); // end click
  }); // end foreach

  /* закрытие окон */
  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");
      document.body.classList.remove("js-open-modal");
      parentModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  }); // end foreach

  /* закрытие по ESC */
  // document.body.addEventListener(
  //   "keyup",
  //   function (e) {
  //     var key = e.keyCode;

  //     if (key == 27) {
  //       document.querySelector(".modal.active").classList.remove("active");
  //       document.querySelector(".overlay").classList.remove("active");
  //     }
  //   },
  //   false
  // );

  overlay.addEventListener("click", function () {
    document.querySelector(".modal.active").classList.remove("active");
    this.classList.remove("active");
    document.body.classList.remove("js-open-modal");
  });
}); // end ready


// Переключение в услугах и удаление привязанного текста

const buttons = document.querySelectorAll(".btn"); // нашли элемент по которому кликнем
const servicelogo = document.querySelector("#photo_service"); // куда вставим
const service_logo = document.querySelector(".service_logo");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

function handleClick(buttons) {
  servicelogo.src = buttons;
  parent.removeChild(child);
  service_logo.setAttribute("style", "max-width: 960px");
};
  window.addEventListener('click', e => { 
  const target = e.target 
  if (!target.closest('.btn')) {
    servicelogo.src = ("./Image/Rectangle244.png");
    service_logo.setAttribute("style", "max-width: 608px");
    parent.appendChild(child);
  }
    else return (false);
    
  })