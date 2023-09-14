// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

let resume1 = document
  .getElementById("resume-link-1")
  .addEventListener("click", NewTab);
let resume2 = document
  .getElementById("resume-link-2")
  .addEventListener("click", NewTab);
function NewTab() {
  window.open(
    "https://drive.google.com/file/d/1pg4PgIBrdNWXQpgm6w8KXwMdNRVDhNoL/view?usp=sharing",
    "_blank"
  );
}
