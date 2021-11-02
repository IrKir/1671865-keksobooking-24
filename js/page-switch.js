const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const formFilters = document.querySelector('.map__filters');
const formFilterFields = formFilters.querySelectorAll('.map__filter');
const formFilterField = formFilters.querySelector('.map__features');

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  formFilters.classList.remove('map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.removeAttribute('disabled', '');
  });
  formFilterFields.forEach((formFilterFieldElement) => {
    formFilterFieldElement.removeAttribute('disabled', '');
  });
  formFilterField.removeAttribute('disabled', '');
};

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  formFilters.classList.add('map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.setAttribute('disabled', '');
  });
  formFilterFields.forEach((formFilterFieldElement) => {
    formFilterFieldElement.setAttribute('disabled', '');
  });
  formFilterField.setAttribute('disabled', '');
};

export {
  activateForm,
  deactivateForm
};
