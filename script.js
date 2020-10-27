const callOutBox = document.getElementById("callOutBox");
const header = document.querySelector(".header");

callOutBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    e.target.nextElementSibling.classList.toggle("show");
  }
});

window.addEventListener("scroll", () => {
  let top = window.scrollY;
  if (top >= 50) {
  header.classList.add("active");
  } else {
  header.classList.remove("active");
  }
});