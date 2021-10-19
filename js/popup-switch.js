const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const formFilters = document.querySelector('.map__filters');
const formFilterFields = adForm.querySelectorAll('.map__filter' && '.map__features');


const getFormInactive = () => {
  adForm.classList.add('.ad-form--disabled');
  formFilters.classList.add('.map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.setAttribute('disabled', '');
  });
  formFilterFields.forEach((formFilterField) => {
    formFilterField.setAttribute('disabled', '');
  });
};

getFormInactive();

const getFormActive = () => {
  adForm.classList.remove('.ad-form--disabled');
  formFilters.classList.remove('.map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.removeAttribute('disabled', '');
  });
  formFilterFields.forEach((formFilterField) => {
    formFilterField.removeAttribute('disabled', '');
  });
};

getFormActive();
