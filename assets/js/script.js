// Navbar Blur
const navEl = document.querySelector(".navbar");

const scrollThreshold = window.innerHeight * 0.7;

window.addEventListener("scroll", () => {
  if (window.scrollY >= scrollThreshold) {
    navEl.classList.add("navbar-scroll");
  } else if (window.scrollY < scrollThreshold) {
    navEl.classList.remove("navbar-scroll");
  }
});
