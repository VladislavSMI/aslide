const callOutBox = document.getElementById("callOutBox");
const navbar = document.querySelector(".navbar");

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

callOutBox.addEventListener("click", (e) => {
  // var target = e.target;
  // var parent = target.parentElement;
  
 
  if (e.target.parentElement.classList.contains("question")) {
    e.target.parentElement.nextElementSibling.classList.toggle("show");
  } else if (e.target.classList.contains("question")) {
    e.target.nextElementSibling.classList.toggle("show");
  }

  val = e.target;

  console.log(val);
  
});




// callOutBox.addEventListener("click", (e) => {
//   if (e.target.classList.contains("question")) {
//     e.target.nextElementSibling.classList.toggle("show");
//   }
// });

// let qaBoxes = document.querySelectorAll(".question");

// qaBoxes.forEach(function(item){
//   item.addEventListener("click", (e) => {
//     e.target.nextElementSibling.classList.toggle("show");
//     e.target.parentElement.nextElementSibling.classList.toggle("show");
//   })
// })


// Timeline
const items = document.querySelectorAll('#timeline li');

const isInViewport = el => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach(item => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);