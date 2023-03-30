let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

//Email Validation Script
function emailValidation(){
  let form = document.getElementById('form');
  let text = document.getElementById('email-validate');
  let email = document.getElementById('email').value;
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(pattern))
  {
    form.classList.add('valid');
    text.innerHTML = "Your Email Is Valid.";
    text.style.color = "#C4E580";
  }
  else if (email == "")
  {
    form.classList.remove('valid');
    form.classList.remove('invalid');
    text.innerHTML ="";
  }
  else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Please Enter Valid Email Address.";
    text.style.color = "#f44336";
  }
}
