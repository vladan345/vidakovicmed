const hamIcon = document.querySelector(".ham-menu");
const hamNav = document.querySelector(".ham-nav");
hamIcon.addEventListener("click", function () {
  hamNav.classList.toggle("active");
});
