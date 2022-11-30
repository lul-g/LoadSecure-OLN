let nav_txts = document.querySelectorAll(".nav-txt");
let pointer = document.querySelector(".nav-pointer");
let sections = document.querySelectorAll(".sec");
let curr = "";

// window.addEventListener("scroll", () => {
//   sections.forEach((section) => {
//     let top = section.offsetTop;
//     if (window.scrollY >= top) {
//       curr = section.getAttribute("id");
//       curr = curr[curr.length - 1];
//     }
//   });

//   nav_txts.forEach((i) => {
//     i.classList.remove("active");
//     if (i.classList.contains(curr)) {
//       i.classList.add("active");
//     }
//   });
// });

nav_txts.forEach((link) => {
  link.addEventListener("click", () => {
    nav_txts.forEach((i) => {
      i.classList.remove("active");
    });
    link.classList.add("active");
  });
});

//? get links
//? set event listener
//? onclick set the active class
//? take out active from the others

// nav_txts.forEach((link) => {});
// let nav_btn = document.querySelector(".nav-btn");
// let nav_toggle_btn = document.querySelector(".nav-toggle-btn");
// let nav = document.querySelector(".nav");
// let nav_links = document.querySelectorAll(".nav-txt a");

// let screen_size = window.screen;

//   switch (i) {
//     case 0:
//       pointer.style.transform = "translateX(0)";
//     case 1:
//       pointer.style.transform = "translateX(500px)";

//     case 2:
//       pointer.style.transform = "translateX(200px)";
//   }
