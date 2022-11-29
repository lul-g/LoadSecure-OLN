let nav_txts = document.querySelectorAll(".nav-txt");
let pointer = document.querySelector(".nav-pointer");

nav_txts.forEach((link) => {
  link.addEventListener("click", () => {
    console.log(event.target);
  });
});

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
