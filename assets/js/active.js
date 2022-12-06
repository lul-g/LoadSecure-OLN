// *nav related
let nav_txt = document.querySelector(".nav-txt");
let nav_btn = document.querySelector(".nav-btn");
let nav_toggle_btn = document.querySelector(".nav-toggle-btn");
let nav = document.querySelector(".nav");
let screen_size = window.screen;

function toggle_nav() {
  nav.classList.toggle("active");
}
// *video related
let video_player = document.querySelector(".video-player");
let video_overlay = document.querySelector(".video-overlay");
let video = document.querySelector("video");

let play_btn = document.querySelector(".video-controller label");
let play_btn_icon = document.querySelector(".video-controller label i");
let play_btn_container = document.querySelector(".video-controller");

let fullscreen_btn = document.querySelector(".fullscreen-controller label");
let fullscreen_btn_container = document.querySelector(".fullscreen-controller");
let txt_overlay = document.querySelector(".video-player .txt");

let touchEvent = "ontouchstart" in window ? "touchstart" : "click";

video.currentTime = 5.5;
play_btn.addEventListener(touchEvent, (e) => video_play());
setTimeout(() => {
  // screen_size.width > 930 ? video_play() : null;
}, 300);
video.addEventListener("pause", () => {
  video.currentTime = 5.5;

  video_overlay.style.left = "0";
  txt_overlay.style.transform = "translate(0)";
  play_btn_container.style.transform = "translate(0, 0)";

  play_btn_icon.classList.replace("fa-circle-pause", "fa-circle-play");
  fullscreen_btn_container.style.display = "none";
});
function video_play() {
  if (video.paused) {
    video.currentTime = 0;
    video.play();

    video_overlay.style.left = "200%";
    txt_overlay.style.transform = "translate(-200%)";

    screen_size.width < 500
      ? (play_btn_container.style.left = "0rem")
      : (play_btn_container.style.left = "2rem");
    play_btn_container.style.top = "50%";
    fullscreen_btn_container.style.top = "60%";

    play_btn_icon.classList.replace("fa-circle-play", "fa-circle-pause");
    if (screen_size.width <= 930) fullscreen_btn.style.display = "none";

    fullscreen_btn_container.style.display = "inline-block";
    // fullscreen
    fullscreen_btn.addEventListener(touchEvent, () => {
      if (video.requestFullscreen && screen_size.width > 930) {
        video.requestFullscreen();
      } else if (elem.mozRequestFullScreen && screen_size.width > 930) {
        video.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen && screen_size.width > 930) {
        video.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen && screen_size.width > 930) {
        video.msRequestFullscreen();
      }
    });
  } else if (video.played) {
    video.pause();
    video.currentTime = 5.5;

    video_overlay.style.left = "0";
    txt_overlay.style.transform = "translate(0)";
    play_btn_container.style.left = "2rem";
    play_btn_container.style.top = "70%";
    fullscreen_btn_container.style.top = "60%";

    play_btn_icon.classList.replace("fa-circle-pause", "fa-circle-play");
    fullscreen_btn_container.style.display = "none";
  }
}
video.onended = () => {
  video.currentTime = 5.5;

  video_overlay.style.left = "0";
  txt_overlay.style.transform = "translate(0)";
  play_btn_container.style.left = "2rem";
  play_btn_container.style.top = "70%";
  fullscreen_btn_container.style.top = "60%";

  play_btn_icon.classList.replace("fa-circle-pause", "fa-circle-play");
  fullscreen_btn_container.style.display = "none";
};
// sound_btn.addEventListener("click", (e) => unmute());
// function unmute() {
//   if (video.muted) {
//     video.muted = false;
//   } else {
//     video.muted = true;
//   }
// }

//* to-top-btn
// let to_top_btn = document.querySelector(".to-top-btn");
// to_top_btn.addEventListener("click", () =>
//   window.scrollTo({ top: 0, behavior: "smooth" })
// );
// *newsletter
let newsletter_toggler = document.querySelector(".footer .btn-2");
let newsletter_form = document.querySelector(".newsletter-form");

newsletter_toggler.addEventListener("click", () => {
  newsletter_form.classList.toggle("show-newsletter");

  if (getComputedStyle(newsletter_form).width !== "0px") {
    newsletter_toggler.textContent = "Close This Form";
  } else {
    newsletter_toggler.textContent = "Join Our Newsletter";
  }
});
// * scroll header color change  || to-top-btn in-out of view
let section_header = document.querySelector(".section_header");
let extra_nav = document.querySelector(".extra_nav");
let extra_nav_child = document.querySelectorAll(".extra_nav_child");
let glow_btn = document.querySelectorAll(".glow-btn");

// window.addEventListener("scroll", () => {
//   let windowPos = window.scrollY;
//   if (windowPos > 700) {
//     to_top_btn.style.transform = "translate(0, 0)";
//   } else {
//     to_top_btn.style.transform = "translate(10rem, 10rem)";
//   }
// });

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
