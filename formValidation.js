var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var company = document.getElementById("company");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var country = document.getElementById("country");
var sex = document.getElementById("sex");
var language = document.getElementById("language");
var term = document.getElementById("term");

function validate() {
  if (firstname.value.length <= 0) {
    alert("Name is required");
    fname.focus();
    return false;
  }
  if (lastname.value.length <= 0) {
    alert("Name is required");
    lastname.focus();
    return false;
  }
  if (company.value.length <= 0) {
    alert("company is required");
    company.focus();
    return false;
  }
  if (email.value.length <= 0) {
    alert("Email is required");
    email.focus();
    return false;
  }
  if (country.value.length <= 0) {
    alert("country Id is required");
    email.focus();
    return false;
  }
  if (sex.checked) {
    sex = true;
  } else {
    alert("Gender is required!");
  }
  if (phone.value.length <= 0) {
    alert("Mobile number is required");
    phone.focus();
    return false;
  }
  if (language.checked) {
    language = true;
  } else {
    alert("Language is required!!");
  }
  if (term.checked) {
    term = true;
  } else {
    alert("Tick the terms and conditions");
  }
}
