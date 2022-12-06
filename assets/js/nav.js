let nav_2 = document.querySelector(".nav");

let nav_txts = document.querySelectorAll(".nav-txt");
let pointer = document.querySelector(".nav-pointer");
let sections = document.querySelectorAll(".sec");
let not_headers = document.querySelectorAll(
  ":not(.section_header *, .section_header, .nav-toggle-btn, .nav-toggle-btn *)"
);

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

// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= sectionTop - 50) {
//       current = section.getAttribute("id");
//     }
//   });
//   nav_txts.forEach((link) => {
//     link.classList.remove("active");
//     if (link.classList.contains(current)) {
//       link.classList.add("active");
//     }
//   });
// });
