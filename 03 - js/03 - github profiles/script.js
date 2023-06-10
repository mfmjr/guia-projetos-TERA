const API_URL = "https://api.github.com/users/";
const form = document.querySelector(".user-form");
const search = document.querySelector(".search");
const main = document.querySelector(".main");

const getUser = async (username) => {
  try {
    const response = await fetch(API_URL + username);
    const data = await response.json();
    createCard(data);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
};

const createErrorCard = (msg) => {
  const cardHTML = `
  <div class="card">
  <h1>${msg}</h1>
  </div>
  `;
  main.innerHTML = cardHTML;
};

const createCard = (user) => {
  const card = `
  <div class="card">
        <img
          src="${user.avatar_url}"
          alt="${user.name}"
          class="avatar"
        />
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>
         ${user.bio}
          </p>

          <ul>
            <li>${user.followers} <strong>Followers</strong></li>
            <li>${user.following} <strong>Following</strong></li>
            <li>${user.public_repos} <strong>Respositores</strong></li>
          </ul>

          <div class="repos">
             
          </div>
        </div>
  `;
  main.innerHTML = card;
};

const formSubmita = (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
};

form.addEventListener("submit", formSubmita);
