const callOutBox = document.getElementById("callOutBox");
const navbar = document.querySelector(".navbar");

callOutBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    e.target.nextElementSibling.classList.toggle("show");
  }
});

window.addEventListener("scroll", () => {
  let top = window.scrollY;
  let w = window.outerWidth;
  if (top >= 50) {
    navbar.classList.add("scrollNav");
  } else {
    navbar.classList.remove("scrollNav");
  }
});

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
