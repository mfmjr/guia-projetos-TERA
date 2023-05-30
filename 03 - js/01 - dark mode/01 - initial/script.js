const container = document.querySelector(".container");
const btnDarkMode = document.querySelector(".toggle");

const btnDarkModeClicked = () => {
  container.classList.toggle("darkMode")
    ? (btnDarkMode.firstElementChild.className = "far fa-moon")
    : (btnDarkMode.firstElementChild.className = "far fa-sun");
};

btnDarkMode.addEventListener("click", btnDarkModeClicked);
