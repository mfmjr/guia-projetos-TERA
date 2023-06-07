const textquote = document.querySelector(".quote");
const btnQuote = document.querySelector(".btnQuote");
const author = document.querySelector(".author");

const btnGetJokeClicked = async () => {
  try {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    const randomJoke = Math.floor(Math.random() * data.length);
    textquote.textContent = `"${data[randomJoke].text}"`;
    author.textContent = `${data[randomJoke].author}`;
  } catch (error) {
    throw new Error(error);
  }
};

btnQuote.addEventListener("click", btnGetJokeClicked);
