const ALERT_SHOW_TIME = 2000;

const onSubmitSuccess = () => {
  const successFormTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successForm = successFormTemplate.cloneNode(true);
  successForm.classList.add('active-popup');
  document.body.appendChild(successForm);

  setTimeout(() => {
    successForm.remove();
  }, ALERT_SHOW_TIME);
};

const onSubmitError = () => {
  const errorFormTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorForm = errorFormTemplate.cloneNode(true);
  errorForm.classList.add('active-popup');
  document.body.appendChild(errorForm);

  const buttonError = errorForm.querySelector('.error__button');
  buttonError.addEventListener('click', errorForm.remove);
};

export {onSubmitSuccess, onSubmitError};
