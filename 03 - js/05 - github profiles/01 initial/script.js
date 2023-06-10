const API_URL = "https://api.github.com/users/";
const form = document.querySelector(".user-form");
const search = document.querySelector(".search");
const main = document.querySelector(".main");

const getUser = async () => {  
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
          src="user"
          alt="user"
          class="avatar"
        />
        <div class="user-info">
          <h2>user</h2>
          <p>
         ${user}
          </p>

          <ul>
            <li>user <strong>Followers</strong></li>
            <li>user <strong>Following</strong></li>
            <li>user <strong>Respositores</strong></li>
          </ul>

          <div class="repos">
             
          </div>
        </div>
  `;
  main.innerHTML = card;
};

const formSubmita = (e) => {
  e.preventDefault();
  
};

form.addEventListener("submit", formSubmita);
