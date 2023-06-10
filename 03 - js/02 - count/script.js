const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const btnClear = document.querySelector(".clear");

let value = document.querySelector("#value");

const btnIncrementClicked = () => {
  value.textContent = Number(value.textContent) + 1;
};

const btnDecrementClicked = () => {
  value.textContent = Number(value.textContent) - 1;
};

const btnClearClicked = () => {
  value.textContent = Number(0);
};

btnIncrement.addEventListener("click", btnIncrementClicked);
btnDecrement.addEventListener("click", btnDecrementClicked);
btnClear.addEventListener("click", btnClearClicked);
