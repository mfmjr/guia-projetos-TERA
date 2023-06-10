const changeSlide = document.querySelectorAll(".slide");
console.log("changeSlide: ", changeSlide);
const btnNext = document.querySelector(".right-arrow");
const btnPrev = document.querySelector(".left-arrow");
let current = 0;

const btnNextClicked = () => {
  changeSlide.forEach((slide) => {
    slide.classList.remove("change");
  });

  changeSlide[current].classList.add("change");
};

const btnPrevClicked = () => {
  changeSlide.forEach((slide) => {
    slide.classList.remove("change");
  });

  changeSlide[current].classList.add("change");
};

btnNext.addEventListener("click", btnNextClicked);
btnPrev.addEventListener("click", btnPrevClicked);
