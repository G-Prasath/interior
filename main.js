function myHeader() {
  let header = document.getElementById("header");
  let lol = document.getElementById("lol");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      header.classList.add("active");
      lol.src = "pic/bulb2.png";
    } else {
      header.classList.remove("active");
      lol.src = "pic/bulb.png";
    }
  });
}
myHeader();

function myBars() {
  let bars = document.querySelector("#bar");
  let nav = document.querySelector(".navigation");
  bars.onclick = function () {
    if (nav.style.right == "0%") {
      nav.style.right = "-50%";
      bars.src = "pic/menu.png";
    } else {
      nav.style.right = "0%";
      bars.src = "pic/x.png";
    }
    nav.classList.toggle("new");
  };
}
myBars();

function myFun() {
  let plus = document.querySelector(".plus");
  let textBox = document.querySelector(".text-box ");
  plus.onclick = () => {
    textBox.classList.toggle("active");
    plus.classList.toggle("img_active");
  };
}
myFun();


function validateForm(formId) {
  // Get form inputs
  var name = document.querySelector("#"+formId+" "+".name").value;
  var email = document.querySelector("#" + formId + " " + ".email").value;
  var phone = document.querySelector("#" + formId + " " + ".phone").value;
  var msg = document.querySelector("#" + formId + " " + ".msg").value;

  // Reset error message
  var nameError = document.querySelector("#" + formId + " " + ".error-name");
  var emailError = document.querySelector("#" + formId + " " + ".error-email");
  var phoneError = document.querySelector("#" + formId + " " + ".error-phone");
  var msgError = document.querySelector("#" + formId + " " + ".error-msg");

  nameError.textContent = "";
  emailError.textContent = "";
  phoneError.textContent = "";
  msgError.textContent = "";

  // Validate inputs
  if (name.trim() === "") {
    nameError.textContent = "Enter Your Name";
    return false;
  }

  if (email.trim() === "") {
    emailError.textContent = "Email Address is required";
    return false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Invalid Email Address";
    return false;
  }

  if (phone.trim() === "") {
    phoneError.textContent = "Phone Number is required";
    return false;
  } else if (!isValidPhoneNumber(phone)) {
    phoneError.textContent = "Invalid Phone Number";
    return false;
  }

  if (msg.trim() === "") {
    msgError.textContent = "Enter your Requirement";
    return false;
  }

  return true;
}

function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
  var phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
