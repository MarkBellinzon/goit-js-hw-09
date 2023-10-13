import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';


  const btn = document.querySelector('[data-start]');
  const day = document.querySelector('[data-days]');
  const hour = document.querySelector('[data-hours]');
  const min = document.querySelector('[data-minutes]');
  const sec = document.querySelector('[data-seconds]');


btn.disabled = true;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentDate = new Date();

    if (selectedDates[0] - currentDate > 0) {
      Notiflix.Notify.success('Lets go?');
      btn.disabled = false;
    } else {
      btn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}
btn.addEventListener('click', onTimerStart);

function onTimerStart() {
  const selectedDate = datetime.selectedDates[0];

  timerId = setInterval(() => {
    const startTime = new Date();
    const countdown = selectedDate - startTime;
    btn.disabled = true;

    if (countdown < 0) {
      clearInterval(timerId);
      return;
    }
    updateTimerFace(convertMs(countdown));
  }, 1_000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  min.textContent = addLeadingZero(minutes);
  sec.textContent = addLeadingZero(seconds);
}

const datetime = flatpickr('#datetime-picker', options);

