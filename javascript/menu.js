const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("cross");
    nav.classList.toggle("show");
});