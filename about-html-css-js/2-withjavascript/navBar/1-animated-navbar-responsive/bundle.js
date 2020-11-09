const stack = document.querySelector(".stack");
const navbar = document.querySelector(".nav__links");
const navMenu = document.querySelectorAll(".nav__links li");

stack.addEventListener("click", () => {
  navbar.classList.toggle("toggle");
  stack.classList.toggle("toggle");

  // for (const link in navMenu.classList) {
  //   link.classList.toggle('fade');
  //   // console.log(link.classList);

  //   }
});
