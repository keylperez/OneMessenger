"use strict";
//Selected Elements
const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

//Functions
const removeHidden = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const addHidden = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

//Event Listeners
buttonSignup.addEventListener("click", removeHidden);
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    addHidden();
  }
});
