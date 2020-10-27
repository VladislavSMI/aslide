const callOutBox = document.getElementById("callOutBox");

callOutBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("question")) {
    e.target.nextElementSibling.classList.toggle("show");
  }
});
