const getHours = () => {
  const clock = document.querySelector(".clockNow");
  const dayOfTheYear = document.querySelector(".dayOfTheYear");
  const container = document.querySelector(".container");

  const date = new Date();
  
  const hour = hours < 10 ? `0${hours}` : hours;
  const minute = minutes < 10 ? `0${minutes}` : minutes;
  const second = seconds < 10 ? `0${seconds}` : seconds;

  clock.innerHTML = `
  <div class="boxClock">
  <div class="clock"> CHAMAR O HORÁRIO AQUI </div> :
  <div class="clock"> CHAMAR O HORÁRIO AQUI </div> :
  <div class="clock"> CHAMAR O HORÁRIO AQUI </div>  
  </div>
  `;

  dayOfTheYear.textContent = `${MOSTRAR O ANO, MES E DIA}`;
  clock.append(container);
};

 
