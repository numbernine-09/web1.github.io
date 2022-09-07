const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu-navigation");
const hero = document.getElementById(".text-hero");

menuBar.addEventListener("click", function () {
  menuNav.classList.toggle("menu-active");

});
