const getHours = () => {
  const clock = document.querySelector(".clockNow");
  const dayOfTheYear = document.querySelector(".dayOfTheYear");
  const container = document.querySelector(".container");

  const date = new Date();

  const year = date.getFullYear();
  const mouth = date.getMonth();
  const day = date.getDate();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;

  clock.innerHTML = `
  <div class="boxClock">
  <div class="clock"> ${hour}</div> :
  <div class="clock"> ${minute}</div> :
  <div class="clock"> ${second}</div>
  
  </div>
  `;
  dayOfTheYear.textContent = `${day}/${mouth}/${year}`;
  clock.append(container);
};

setInterval(() => {
  getHours();
}, 1000);
