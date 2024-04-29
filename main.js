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

// function myVideo(){
//     let links = document.querySelector(".link_a");
//     let overs = document.querySelector(".bg-show .overlay");
//     let exit = document.querySelector(".cancel");
//     let player = document.querySelector(".player");
//     let videos = document.getElementById("video");
//     links.onclick = (ed)=>{
//         ed.preventDefault();
//         overs.style.display = "block"
//     }
//     exit.onclick = ()=>{
//         overs.style.display = "none"
//     }
//     player.onclick = ()=>{
//         if(videos.paused){
//             videos.play();
//             player.src = "pic/pause.png"
//         }else{
//             videos.pause();
//             player.src = "pic/play.png"
//         }
//     }
// }
// myVideo();

// function toTop() {
//   let top = document.querySelectorAll(".top a i");
//   window.onscroll = () => {
//     if (window.scrollY > 100 || document.documentElement.scrollTop > 100) {
//       top.style.color = "red";
//     } else {
//       top.style.color = "red";
//     }
//   };

//   top.onclick = () => {
//     scrollTo(0, 0);
//   };
// }
// toTop();

function validateForm(formId) {
  // Get form inputs
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;
  var phone = document.querySelector(".phone").value;
  var msg = document.querySelector(".msg").value;

  // Reset error message
  var nameError = document.getElementById("error-name");
  var emailError = document.getElementById("error-email");
  var phoneError = document.getElementById("error-phone");
  var msgError = document.getElementById("error-msg");

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
