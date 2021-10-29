const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const isClickAndKeydown = (messageType) => {
  messageType.addEventListener('click', () => {
    messageType.remove();
  } );
  document.addEventListener('keydown', (evt) => {
    if(isEscKey(evt)) {
      messageType.remove();
    }
  });
};

const showPopupSuccess = () => {
  const successFormTemplate = document.querySelector('#success')
    .content
    .querySelector('.success');
  const success = successFormTemplate.cloneNode(true);
  document.body.appendChild(success);
  isClickAndKeydown(success);
};

const showPopupError = () => {
  const errorFormTemplate = document.querySelector('#error')
    .content
    .querySelector('.error');
  const error = errorFormTemplate.cloneNode(true);
  document.body.appendChild(error);
  isClickAndKeydown(error);
};

export {showPopupSuccess, showPopupError};
