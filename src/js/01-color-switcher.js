// const btnStart = document.querySelector('[data-start]');
// const btnStop = document.querySelector('[data-stop]');
// const changeColor = document.querySelector('body');

// let intervalId = null;

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// btnStop.setAttribute('disable', '');

// btnStart.addEventListener('click', element => {
//   element.target.setAttribute('disable', true);
//   btnStop.removeAttribute('disable');

//   intervalId = setInterval(() => {
//     changeColor.style.backgroundColor = getRandomHexColor();
//   }, 1000);
// });

// btnStop.addEventListener('click', element => {
//   element.target.setAttribute('disable', true);
//   btnStart.removeAttribute('disable');
//   clearInterval(intervalId);
// });
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
stopBtn.addEventListener('click', onStop);
startBtn.addEventListener('click', onStart);

const TIME_DELAY = 500;
let intervalId = null;

stopBtn.disabled = true;

function onStart(event) {
    event.target.disabled = true;
    stopBtn.disabled = false;

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, TIME_DELAY);
};
function onStop(event) {
    startBtn.disabled = false;
    event.target.disabled = true;

    clearInterval(intervalId);
};


