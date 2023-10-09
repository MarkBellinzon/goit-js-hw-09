const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const changeColor = document.querySelector('body');

let intervalId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStop.setAttribute('disable', '');

btnStart.addEventListener('click', element => {
  element.target.setAttribute('disable', true);
  btnStop.removeAttribute('disable');

  intervalId = setInterval(() => {
    changeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', element => {
  element.target.setAttribute('disable', true);
  btnStart.removeAttribute('disable');
  clearInterval(intervalId);
});
