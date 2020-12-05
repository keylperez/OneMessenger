"use strict";
//Selected Elements
const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const navHead = document.querySelector(".nav_head");

//Functions
const removeHidden = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const addHidden = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

const hoverNav = function (e) {
  if (e.target.classList.contains("nav_headings")) {
    const elTarget = e.target;
    const siblings = elTarget
      .closest(".nav_head")
      .querySelectorAll(".nav_headings");

    siblings.forEach((val) => {
      if (val !== elTarget) {
        val.style.opacity = this;
      }
    });
  }
};

//Event Listeners
buttonSignup.addEventListener("click", removeHidden);
overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    addHidden();
  }
});

navHead.addEventListener("mouseover", hoverNav.bind(0.5));
navHead.addEventListener("mouseout", hoverNav.bind(1));
