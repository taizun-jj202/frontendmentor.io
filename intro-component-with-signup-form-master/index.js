// Getting warning element to display the error icon

const first_name_warning = document.querySelector(".input-div.first .warning");
const last_name_warning = document.querySelector(".input-div.last .warning");
const email_warning = document.querySelector(".input-div.email- .warning");
const pswd_warning = document.querySelector(".input-div.pswd- .warning");
const submit_btn = document.querySelector(".submit-button .sbt-btn");

// Selecting each entry in the form
const form_first_name = document.getElementById("first-name");
const form_last_name = document.getElementById("last-name");
const form_email = document.getElementById("email-addr");
const form_pswd = document.getElementById("pswd");

submit_btn.addEventListener("click", () => {
  if (form_first_name.value === "") {
    console.log("First name is empty");
    first_name_warning.classList.remove("hidden");
    document.querySelector(".input-div.first img").classList.remove("hidden");
    document.querySelector(".input-div.first input").style.borderColor = "red";
  }
  if (form_last_name.value === "") {
    console.log("Last name is empty");
    last_name_warning.classList.remove("hidden");
    document.querySelector(".input-div.last img").classList.remove("hidden");
    document.querySelector(".input-div.last input").style.borderColor = "red";
  }
  if (form_email.value === "") {
    console.log("Email is empty");
    email_warning.classList.remove("hidden");
    document.querySelector(".input-div.email- img").classList.remove("hidden");
    document.querySelector(".input-div.email- input").style.borderColor = "red";
  }
  if (form_pswd.value === "") {
    console.log("Password field is empty");
    pswd_warning.classList.remove("hidden");
    document.querySelector(".input-div.pswd- img").classList.remove("hidden");
    document.querySelector(".input-div.pswd- input").style.borderColor = "red";
  }
});
