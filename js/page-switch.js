const adForm = document.querySelector('.ad-form');
const adFormFieldsets = adForm.querySelectorAll('.ad-form__element');
const filterForm = document.querySelector('.map__filters');
const filterFormFields = filterForm.querySelectorAll('.map__filter');
const filterFormField = filterForm.querySelector('.map__features');

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');
  filterForm.classList.remove('map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.removeAttribute('disabled');
  });
  filterFormFields.forEach((filterFormFieldElement) => {
    filterFormFieldElement.removeAttribute('disabled');
  });
  filterFormField.removeAttribute('disabled');
};

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');
  filterForm.classList.add('map__filters--disabled');
  adFormFieldsets.forEach((adFormFieldset) => {
    adFormFieldset.setAttribute('disabled', '');
  });
  filterFormFields.forEach((filterFormFieldElement) => {
    filterFormFieldElement.setAttribute('disabled', '');
  });
  filterFormField.setAttribute('disabled', '');
};

export {
  activateForm,
  deactivateForm,
  adForm
};
