import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

formRef.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  for (let i = 0; i < amount.value; i++) {
    let position = i + 1;
    const delays = Number(delay.value) + step.value * i;

       createPromise(position, delays)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
 
  evt.currentTarget.reset();
}
