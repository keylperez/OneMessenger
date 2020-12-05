"use strict";

const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");

buttonSignup.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("hidden");
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    overlay.classList.add("hidden");
  }
});
