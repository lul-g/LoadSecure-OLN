// *nav related
let nav_txt = document.querySelector(".nav-txt");
let nav_btn = document.querySelector(".nav-btn");
let nav_toggle_btn = document.querySelector(".nav-toggle-btn");
let nav = document.querySelector(".nav");
let nav_links = document.querySelectorAll(".nav-txt a");
let screen_size = window.screen;
function toggle_nav() {
  nav.classList.toggle("active");
}

//* to-top-btn
let to_top_btn = document.querySelector(".to-top-btn");
to_top_btn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
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

window.addEventListener("scroll", () => {
  let windowPos = window.scrollY;
  if (windowPos > 700) {
    to_top_btn.style.transform = "translate(0, 0)";
  } else {
    to_top_btn.style.transform = "translate(10rem, 10rem)";
  }

  if (windowPos > 0) {
    section_header.classList.add("scrolled");

    nav_links.forEach((nav_link) => {
      nav_link.style.color = "#dae4f1";
      nav_link.style.borderColor = "#dae4f1";
    });

    extra_nav.style.background = "#214551";
    extra_nav_child.forEach((child) => {
      child.style.color = "#dae4f1";
      child.style.borderColor = "#dae4f1";
    });

    nav_txt.style.setProperty("--icon-clr", "#dae4f1");
    nav.style.setProperty("--glow", "#dae4f1");
    nav.style.setProperty("--glow-invert", "#dae4f1");

    document.getElementById("img-logo").src = "assets/img/loadsecure.png";
    document.getElementById("img-logo").style.width = "4rem";
    // nav_toggle_btn.style.setProperty("--nav-toggler-clr", "#dae4f1");
  } else {
    section_header.classList.remove("scrolled");

    if (screen_size.width > 750) {
      nav_links.forEach((nav_link) => {
        nav_link.style.color = "#dae4f1";
        nav_link.style.borderColor = "#dae4f1";
      });
      extra_nav.style.background = "#dae4f1";
      extra_nav_child.forEach((child) => {
        child.style.color = "#214551";
        child.style.borderColor = "#214551";
      });

      nav_txt.style.setProperty("--icon-clr", "#dae4f1");
      nav.style.setProperty("--glow", "#455c66");
      nav.style.setProperty("--glow-invert", "#214551");
    }

    document.getElementById("img-logo").src = "assets/img/loadsecure.png";
    document.getElementById("img-logo").style.width = "4rem";
    // nav_toggle_btn.style.setProperty("--nav-toggler-clr", "#455c66");
  }
});
