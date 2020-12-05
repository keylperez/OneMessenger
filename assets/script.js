"use strict";

const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

buttonSignup.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});
overlay.addEventListener("click", function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});
