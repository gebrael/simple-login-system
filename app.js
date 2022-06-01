var logInEmail = document.getElementById("logInEmail");
var logInPassword = document.getElementById("logInPassword");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var userName = document.getElementById("signUpName");
var signUpError = document.getElementById("signUpError");
var logInError = document.getElementById("logInError");
var wrong = document.getElementById("wrong");
var message = document.getElementById("msg");
var signUpEmailexist = document.getElementById("signUpEmailexist");

function signUP() {
  if (
    signUpEmail.value == "" ||
    signUpPassword.value == "" ||
    userName.value == ""
  ) {
    error.classList.replace("d-none", "d-block");
  } else if (signUpEmail.value == localStorage.getItem("email")) {
    signUpEmailexist.classList.replace("d-none", "d-block");
  } else if (
    signUpEmail.value !== localStorage.getItem("email") &&
    signUpEmail.value !== "" &&
    signUpPassword.value !== ""
  ) {
    localStorage.setItem("email", signUpEmail.value);
    localStorage.setItem("password", signUpPassword.value);
    localStorage.setItem("name", userName.value);
    signUpEmail.value = "";
    signUpPassword.value = "";
    userName.value = "";
    window.location.href = "landingPage.html";
  }
}

function logIn() {
  if (
    logInEmail.value == localStorage.getItem("email") &&
    logInPassword.value == localStorage.getItem("password")
  ) {
    window.location.href = "landingPage.html";
  } else if (logInEmail.value == "" || logInPassword.value == "") {
    logInError.classList.replace("d-none", "d-block");
  } else if (
    logInEmail.value != localStorage.getItem("email") ||
    logInPassword.value != localStorage.getItem("password")
  ) {
    wrong.classList.replace("d-none", "d-block");
  }
}

function logOut() {
  window.location.href = "index.html";
}
message.innerText = "Welcome " + localStorage.getItem("name");
