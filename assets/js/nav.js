let nav_txt = document.querySelector(".nav-txt");
let nav_btns = document.querySelector(".nav-btns");

let nav_toggle_btn = document.querySelector(".nav-toggle-btn");
// let nav_btns = document.querySelector(".nav-btns");
let screen_size = window.screen;
// nav_toggle_btn.addEventListener("click", () => toggle_nav());

function toggle_nav() {
  // let checkbox = document.querySelector("#nav_toggler");
  nav_txt.classList.toggle("active");

  nav_btns.classList.toggle("active");
  // if (checkbox.checked) {
  //   nav_txt.style.transform = "translate(0)";
  //   nav_btns.style.transform = "translate(0)";
  //   if (screen_size.width <= 640) nav_btns.style.transform = "translate(0)";
  // } else {
  //   nav_txt.style.transform = "translateY(-20rem)";
  //   nav_btns.style.transform = "translateY(-20rem)";

  //   if (screen_size.width <= 640) nav_btns.style.transform = "translate(100%)";
  // }
  // if (screen_size.width >= 1200) {
  //   nav_list.style.transform = "translate(0)";
  //   nav_btns.style.transform = "translate(0)";
  // }
}
// *set active nav based on click
let list = document.querySelectorAll("ul li");
list.forEach((el) => {
  el.addEventListener("click", () => {
    set_active(el);
  });
});

function set_active(element) {
  list.forEach((el) => {
    if (el === element) {
      el.classList.add("active");
      el.style.transform = "translateX(0)";
    } else {
      el.classList.remove("active");
    }
  });
}

// *set active nav based on page
// let page_pos = document.body.scrollTop;
// window.addEventListener("scroll", () => {
//   console.log(document.documentElement.scrollTop, document.body.scrollTop);
// });

// TODO: oustide nav click coallpses nav
//! TODO: nav indicate page on scroll --- toggle active class by widnow location
// * TODO:  EXTRA: header should disapper on scroll down and appear on scroll up (if nav should be fixed) else no problemo
