// *nav related
let nav_txt = document.querySelector(".nav-txt");
let nav_btns = document.querySelector(".nav-btns");

let nav_toggle_btn = document.querySelector(".nav-toggle-btn");
let screen_size = window.screen;
function toggle_nav() {
  nav_txt.classList.toggle("active");
  nav_btns.classList.toggle("active");
}

// *video related
let video_player = document.querySelector(".video-player");
let video_overlay = document.querySelector(".video-overlay");
let video = document.querySelector("video");

let play_btn = document.querySelector(".video-controller label");
let play_btn_container = document.querySelector(".video-controller");

let fullscreen_btn = document.querySelector(".fullscreen-controller label");
let fullscreen_btn_container = document.querySelector(".fullscreen-controller");
let txt_overlay = document.querySelector(".video-player .txt");

video.currentTime = 5.5;
play_btn.addEventListener("click", (e) => video_play());
function video_play() {
  if (video.paused) {
    video.currentTime = 0;
    video.play();

    video_overlay.style.left = "110%";
    txt_overlay.style.transform = "translate(-200%)";

    play_btn_container.style.top = "50%";
    play_btn_container.style.left = "-5%";
    fullscreen_btn_container.style.left = "-5%";

    fullscreen_btn_container.style.display = "inline-block";
    fullscreen_btn_container.style.top = "90%";
    // fullscreen
    fullscreen_btn.addEventListener("click", () => {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        video.msRequestFullscreen();
      }
    });
  } else if (video.played) {
    video.pause();
    video.currentTime = 5.5;

    video_overlay.style.left = "0";
    txt_overlay.style.transform = "translate(0)";

    play_btn_container.style.top = "100%";
    play_btn_container.style.left = "0%";

    fullscreen_btn_container.style.display = "none";
    fullscreen_btn_container.style.top = "100%";
  }
}
video.onended = () => {
  video.currentTime = 5.5;

  video_player.style.width = "90%";
  video_overlay.style.left = "0";
  txt_overlay.style.transform = "translate(0)";

  play_btn_container.style.top = "100%";
  play_btn_container.style.left = "0%";

  fullscreen_btn_container.style.display = "none";
  fullscreen_btn_container.style.top = "100%";
  if (screen_size.width >= 751) fullscreen_btn_container.style.left = "20%";
  else fullscreen_btn_container.style.left = "15%";
};
// sound_btn.addEventListener("click", (e) => unmute());
// function unmute() {
//   if (video.muted) {
//     video.muted = false;
//   } else {
//     video.muted = true;
//   }
// }

//* to-top-btn || header
let section_header = document.querySelector(".section_header");
let to_top_btn = document.querySelector(".to-top-btn");
let nav_links = document.querySelectorAll(".nav-txt li > a");
let extra_nav = document.querySelector(".extra_nav");
let extra_nav_child = document.querySelectorAll(".extra_nav_child");

to_top_btn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
window.addEventListener("scroll", () => {
  let windowPos = window.scrollY;
  if (windowPos > 700) {
    to_top_btn.style.transform = "translate(0, 0)";
    console.log(to_top_btn.transform);
  } else {
    to_top_btn.style.transform = "translate(10rem, 10rem)";
  }

  if (windowPos > 0) {
    section_header.classList.add("scrolled");
    section_header.style.borderBottomRightRadius = "20px";
    section_header.style.borderBottomLeftRadius = "20px";

    nav_links.forEach((nav_link) => {
      nav_link.style.color = "#dae4f1";
    });

    extra_nav.style.background = "#dae4f1";
    extra_nav_child.forEach((child) => {
      child.style.color = "#455c66";
      child.style.borderColor = "#455c66";
    });

    nav_txt.style.setProperty("--icon-clr", "#dae4f1");
    nav_btns.style.setProperty("--glow", "#dae4f1");

    document.getElementById("img-logo").src = "assets/img/loadsecure.png";
    document.getElementById("img-logo").style.width = "4rem";
    nav_toggle_btn.style.setProperty("--nav-toggler-clr", "#dae4f1");
  } else {
    section_header.classList.remove("scrolled");

    nav_links.forEach((nav_link) => {
      nav_link.style.color = "#455c66";
    });

    extra_nav.style.background = "#455c66";
    extra_nav_child.forEach((child) => {
      child.style.color = "#dae4f1";
      child.style.borderColor = "dae4f1";
    });

    nav_txt.style.setProperty("--icon-clr", "#455c66");
    nav_btns.style.setProperty("--glow", "#455c66");

    document.getElementById("img-logo").src = "assets/img/logo.png";
    document.getElementById("img-logo").style.width = "8rem";
    nav_toggle_btn.style.setProperty("--nav-toggler-clr", "#455c66");
  }
});
// *set active nav based on click
// let list = document.querySelectorAll("ul li");
// list.forEach((el) => {
//   el.addEventListener("click", () => {
//     set_active(el);
//   });
// });

// function set_active(element) {
//   list.forEach((el) => {
//     if (el === element) {
//       el.classList.add("active");
//       el.style.transform = "translateX(0)";
//     } else {
//       el.classList.remove("active");
//     }
//   });
// }

// *set active nav based on page
// let page_pos = document.body.scrollTop;
// window.addEventListener("scroll", () => {
//   console.log(document.documentElement.scrollTop, document.body.scrollTop);
// });

// TODO: oustide nav click coallpses nav
// ! TODO: on scroll header needs to change cz video messes with it
//! TODO: nav indicate page on scroll --- toggle active class by widnow location
// * TODO:  EXTRA: header should disapper on scroll down and appear on scroll up (if nav should be fixed) else no problemo
