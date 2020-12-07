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

//Selected Elements, Declared Variables
const buttonSignup = document.querySelector(".signupbutton");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const navHead = document.querySelector(".nav_head");
const setupacc = document.querySelector(".setupacc");
const start = document.querySelector(".start");
const login = document.querySelector("#login");

const loginEmail = document.querySelector(".loginemail");
const loginPass = document.querySelector(".loginpass");
const loginButton = document.querySelector("#login");

const signUpButtton = document.querySelector("#submitnewacc");
const signUpEmail = document.querySelector(".signupemail");
const signUpPass = document.querySelector(".signuppass");
const signUpConfirm = document.querySelector(".signupconfirmpass");

let messageOutput;

//Functions

const validateEmail = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const removeHiddenSU = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const addHiddenSU = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

const addHiddenSA = function () {
  start.classList.add("hidden");
};

const removeHiddenSA = function () {
  setupacc.classList.remove("hidden");
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

const displayMessage = function (message) {
  const errorSucc = message === "Success" ? "signUpSuccess" : "signUpError";
  if (messageOutput) messageOutput.remove();
  messageOutput = document.createElement("div");
  messageOutput.classList.add(errorSucc);
  messageOutput.append(message);
  signUpButtton.before(messageOutput);
};

const checkUserCredentials = function (e) {
  e.preventDefault();
  let message;

  if (
    signUpEmail.value !== "" &&
    signUpPass.value !== "" &&
    signUpConfirm.value !== ""
  ) {
    if (validateEmail(signUpEmail.value)) {
      const accountExist = accounts.find(
        (accnt) => accnt.email === signUpEmail.value
      );
      if (!accountExist) {
        if (signUpPass.value === signUpConfirm.value) {
          accounts.push(new Account(signUpEmail.value, signUpPass.value));
          signUpEmail.value = signUpPass.value = signUpConfirm.value = "";
          signUpConfirm.blur();
          message = "Success";
        } else {
          message = "Passwords do not match";
        }
      } else {
        message = "User already exists!";
      }
    } else {
      message = "That is not an email!";
    }
  } else {
    message = "Missing fields";
  }
  displayMessage(message);
};

//Event Listeners
buttonSignup.addEventListener("click", removeHiddenSU);
overlay.addEventListener("click", addHiddenSU);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    addHiddenSU();
  }
});

navHead.addEventListener("mouseover", hoverNav.bind(0.5));
navHead.addEventListener("mouseout", hoverNav.bind(1));

loginButton.addEventListener("click", function (e) {
  e.preventDefault();
  const accntLog = accounts.find((accnt) => accnt.email === loginEmail.value);

  if (accntLog && accntLog.password === loginPass.value) {
    loginEmail.value = loginPass.value = "";
    loginPass.blur();
    console.log("login");
    login.addEventListener("click", addHiddenSA);
    login.addEventListener("click", removeHiddenSA);
  }
});

signUpButtton.addEventListener("click", checkUserCredentials);
