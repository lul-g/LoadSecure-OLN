let nav_2 = document.querySelector(".nav");

let nav_txts = document.querySelectorAll(".nav-txt");
let pointer = document.querySelector(".nav-pointer");
let sections = document.querySelectorAll(".sec");
let not_headers = document.querySelectorAll(
  ":not(.section_header *, .section_header, .nav-toggle-btn, .nav-toggle-btn *)"
);
let screen_size_2 = window.screen;

// if (screen_size_2.width <= "930") {
//   not_headers.forEach((not_header) => {
//     not_header.addEventListener("click", () => {
//       remove_nav();
//     });
//   });
// }
// document.querySelectorAll(".home, .home *)
function remove_nav() {
  nav_2.classList.remove("active");
  document.querySelector(".nav-toggle-btn label i").className =
    "fa-solid fa-layer-group";
}
function change_icon() {
  if (event.target.classList.contains("fa-layer-group")) {
    event.target.className = "fa-solid fa-circle-xmark";
  } else {
    event.target.className = "fa-solid fa-layer-group";
  }
}

nav_txts.forEach((link) => {
  link.addEventListener("click", () => {
    nav_txts.forEach((i) => {
      i.classList.remove("active");
    });
    link.classList.add("active");
  });
});
