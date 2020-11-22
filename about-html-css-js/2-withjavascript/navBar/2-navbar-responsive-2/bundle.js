const toggle = document.querySelector(".toggle");
const itemActive = document.querySelectorAll(".item");

const domReady = (func) => {
  if (document.readyState != "loading") {
    func();
  } else if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", func);
  } else {
    document.attachEvent("onreadystatechange", () => {
      if (document.readyState != "loading") {
        func();
      }
    });
  }
};

domReady(() => {
  toggle.addEventListener("click", () => {
    itemActive.forEach((item) => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
      } else {
        item.classList.add("active");
      }
    });
  });
});
