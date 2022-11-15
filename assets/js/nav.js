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

let sound_btn = document.querySelector(".sound-controller label");
let sound_btn_container = document.querySelector(".sound-controller");
let txt_overlay = document.querySelector(".video-player .txt");

video.currentTime = 5.5;
play_btn.addEventListener("click", (e) => video_play());
function video_play() {
  if (video.paused) {
    video.currentTime = 0;
    video.play();

    video_player.style.inset = "0 0 0 0";

    video_overlay.style.left = "100%";
    txt_overlay.style.transform = "translate(-150%)";

    play_btn_container.style.top = "50%";
    play_btn_container.style.left = "-10%";
    sound_btn_container.style.top = "90%";
    sound_btn_container.style.left = "-10%";
  } else if (video.played) {
    video.pause();
    video.currentTime = 5.5;

    video_player.style.width = "90%";
    video_overlay.style.left = "0";
    txt_overlay.style.transform = "translate(0)";

    play_btn_container.style.top = "100%";
    play_btn_container.style.left = "0%";
    sound_btn_container.style.top = "100%";
    if (screen_size.width >= 751) sound_btn_container.style.left = "20%";
    else sound_btn_container.style.left = "15%";
  }
}
video.onended = () => {
  video.currentTime = 5.5;

  video_player.style.width = "90%";
  video_overlay.style.left = "0";
  txt_overlay.style.transform = "translate(0)";

  play_btn_container.style.top = "100%";
  play_btn_container.style.left = "0%";
  sound_btn_container.style.top = "100%";
  if (screen_size.width >= 751) sound_btn_container.style.left = "20%";
  else sound_btn_container.style.left = "15%";
};
sound_btn.addEventListener("click", (e) => unmute());
function unmute() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

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
