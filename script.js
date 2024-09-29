const navLink = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".section");

navLink.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetSection = link.getAttribute("data-section");

    sections.forEach((section) => {
      section.style.display = "none";
    });

    document.getElementById(targetSection).style.display = "block";
  });
});
