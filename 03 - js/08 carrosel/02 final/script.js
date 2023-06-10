/*
const teste = () => {
  const changeSlide = document.querySelectorAll(".slide");

  if (current > changeSlide.length) {
    current = 1;
  }

  changeSlide.forEach((slide) => {
    if (slide.classList[1].split("-")[1] * 1 === current) {
      slide.style.cssText = "visibility: visible; opacity: 1";
    } else {
      slide.style.cssText = "visibility: hidden; opacity: 0";
    }
  });
  current++;
};

const playPause = () => {
  setInterval(() => {
    teste();
  }, 1000);
};

playPause();
teste();
// btnNext.addEventListener("click", btnNextClicked);
*/

const changeSlide = document.querySelectorAll(".slide");
console.log("changeSlide: ", changeSlide);
const btnNext = document.querySelector(".right-arrow");
const btnPrev = document.querySelector(".left-arrow");
let current = 0;
const btnNextClicked = () => {
  if (current === changeSlide.length - 1) {
    current = 0;
  } else {
    current++;
  }

  changeSlide.forEach((slide) => {
    slide.classList.remove("change");
  });

  changeSlide[current].classList.add("change");
};

const btnPrevClicked = () => {
  if (current === 0) {
    current = changeSlide.length - 1;
  } else {
    current--;
  }

  changeSlide.forEach((slide) => {
    slide.classList.remove("change");
  });

  changeSlide[current].classList.add("change");
};

btnNext.addEventListener("click", btnNextClicked);
btnPrev.addEventListener("click", btnPrevClicked);
