const navbar = document.getElementById("navbar");
const navbarNav = document.getElementById("navbar-nav");

function toggleNav() {
  navbarNav.classList.toggle("show");
}

navbar.addEventListener("click", toggleNav);
