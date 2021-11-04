import {clearForm} from'./form-validation.js';

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const setPopupHandlers = (messageType) => {
  messageType.addEventListener('click', () => {
    messageType.remove();
  }, {once: true});
  document.addEventListener('keydown', (evt) => {
    if (isEscKey(evt)) {
      messageType.remove();
    }
  }, {once: true});
};

const showPopupSuccess = () => {
  const successFormTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const success = successFormTemplate.cloneNode(true);
  document.body.appendChild(success);
  setPopupHandlers(success);
  clearForm();
};

const showPopupError = () => {
  const errorFormTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const error = errorFormTemplate.cloneNode(true);
  document.body.appendChild(error);
  setPopupHandlers(error);
};

export {
  showPopupSuccess,
  showPopupError
};
