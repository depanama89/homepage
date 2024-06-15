const navMenu = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const navToggle = document.getElementById("nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navlink = document.getElementsByClassName("link");
for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
