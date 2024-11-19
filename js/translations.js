let currentLanguage = localStorage.getItem("lang") || "pl";

document.querySelector("#languageBtn").addEventListener("click", () => {
  if (currentLanguage === "pl") {
    currentLanguage = "en";
  } else {
    currentLanguage = "pl";
  }
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
