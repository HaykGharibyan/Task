const langButton = document.querySelector(".navbar-button");
let isEnglish = true;
langButton.addEventListener("click", () => {
  if (isEnglish) {
    langButton.innerHTML =
      '<img src="/Assets/Images/Icon-Planet.svg" alt="" /> RU';
  } else {
    langButton.innerHTML =
      '<img src="/Assets/Images/Icon-Planet.svg" alt="" /> EN';
  }

  isEnglish = !isEnglish;
});
