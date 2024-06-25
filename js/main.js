let currentLanguage = localStorage.getItem("lang") || "pl";
const menuButton = document.querySelector(".menuButton");
const menu = document.querySelector("header nav");

document.querySelector("#languageBtn").addEventListener("click", () => {
  if (currentLanguage === "pl") {
    currentLanguage = "en";
  } else {
    currentLanguage = "pl";
  }
  // console.log(currentLanguage);
  localStorage.setItem("lang", currentLanguage);
  translateText(currentLanguage);
  toggleMenu(false);
});

const translateText = (lang = "pl") => {
  if (lang !== "pl" && lang !== "en") {
    return;
  }
  const textContainers = document.querySelectorAll("[data-lang-key]");

  textContainers.forEach((element) => {
    let translatedText = textTranslations[lang][element.dataset.langKey];
    if (!translatedText) {
      console.log("Translation missing", element.dataset.langKey);
      translatedText = "";
    }
    element.innerHTML = translatedText.replaceAll("\n", "<br/>");
  });
};

const getTranslation = (key) => {
  if (currentLanguage !== "pl" && currentLanguage !== "en") {
    return "";
  }

  return textTranslations[currentLanguage][key];
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
    toggleMenu(false);
  });
});

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
