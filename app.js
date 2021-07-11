// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const btn = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const icons = document.querySelector(".social-icons");

// I DID THIS!

// function toggle() {
//   if (links.classList.contains("show-links")) {
//     links.classList.remove("show-links");
//   } else {
//     links.classList.add("show-links");
//   }
// }

// btn.addEventListener("click", toggle);

// Defferent method

btn.addEventListener("click", function togit() {
  links.classList.toggle("show-links");
  icons.classList.toggle("show-icons");
});
