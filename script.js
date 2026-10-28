const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const yearTag = document.getElementById("year");

if (yearTag) {
  yearTag.textContent = new Date().getFullYear();
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mainNav.classList.remove("open"));
  });
}
