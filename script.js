function time() {
  const hoursEl = document.querySelector("#hours");
  const minutesEl = document.querySelector("#minutes");
  const secondsEl = document.querySelector("#seconds");
  let hours = new Date().getHours();

  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  } else if (hours == 0) {
    hours = 12;
  } else {
    hours;
  }
  hoursEl.innerHTML = hours < 10 ? "0" + hours : hours;
  minutesEl.innerHTML = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(time, 1000);
