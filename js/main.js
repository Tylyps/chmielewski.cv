const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector("header nav");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    removeActiveClass(document.querySelectorAll(".bookmarks"));
    removeActiveClass(document.querySelectorAll(".pageSection"));

    this.parentElement.classList.add("active");
    document.querySelector(this.getAttribute("href")).classList.add("active");
    toggleMenu(false);
  });
});

const removeActiveClass = (elements) => {
  elements.forEach((e) => e.classList.remove("active"));
};

menuButton.addEventListener("click", () => {
  toggleMenu();
});

const toggleMenu = (state) => {
  let isActive = menu.classList.contains("active");

  if (state !== undefined) {
    isActive = !state;
  }

  if (isActive) {
    menu.classList.remove("active");
    menuButton.classList.remove("active");
  } else {
    menu.classList.add("active");
    menuButton.classList.add("active");
  }
};
