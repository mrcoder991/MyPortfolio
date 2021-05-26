const hamburger = document.querySelector(".hamburger");
const mainnav = document.querySelector(".main-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
mainnav.classList.toggle("active");
}