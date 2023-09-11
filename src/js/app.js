// DOM html
const menuButton = document.querySelector("#trigger-label");
const menuBg = document.querySelector(".menu-bg");
const show = document.querySelector(".show");

// Menu toggle
menuButton.addEventListener("click", () => {
  menuBg.classList.toggle("show-menu");
});
