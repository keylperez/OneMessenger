"use strict";
//Fake Account
class Account {
  constructor(email, password) {
    this._email = email;
    this._password = password;
  }
  get password() {
    return this._password;
  }
  get email() {
    return this._email;
  }
}
const account1 = new Account("sample@gmail.com", "password");
const account2 = new Account("ej@gmail.com", "password123");
const accounts = [account1, account2];

// const accntLog = accounts.find((accnt) => accnt.email === "sample@gmail.com");
// console.log(accntLog);

//Selected Elements,
const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const navHead = document.querySelector(".nav_head");

const loginEmail = document.querySelector(".loginemail");
const loginPass = document.querySelector(".loginpass");
const loginButton = document.querySelector("#login");

const signUpButtton = document.querySelector("#submitnewacc");
const signUpEmail = document.querySelector(".signupemail");
const signUpPass = document.querySelector(".signuppass");
const signUpConfirm = document.querySelector(".signupconfirmpass");

//Functions

const validateEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

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

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  const accntLog = accounts.find((accnt) => accnt.email === loginEmail.value);

  if (accntLog && accntLog.password === loginPass.value) {
    console.log("login");
  }
});

signUpButtton.addEventListener("click", function (e) {
  e.preventDefault();
  let message;
  if (
    signUpEmail.value !== "" &&
    signUpPass.value !== "" &&
    signUpConfirm.value !== ""
  ) {
    if (validateEmail(signUpEmail.value)) {
      if (signUpPass.value === signUpConfirm.value) {
        accounts.push(new Account(signUpEmail.value, signUpPass.value));
        message = "Success";
      } else {
        message = "pass does not match confirm";
      }
    } else {
      message = "That is not an email!";
    }
  } else {
    message = "Missing fields";
  }

  const errorSucc = message === "Success" ? "signUpSuccess" : "signUpError";
  const messageOutput = document.createElement("div");
  messageOutput.classList.add(errorSucc);
  messageOutput.append(message);
});

//<div class="signUpError">Missing Fields</div>
