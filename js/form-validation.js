import {sendData, getData} from './api.js';
import {showPopupSuccess, showPopupError} from './popup.js';
import {resetMapAndMarker, setPins} from './map.js';
import {clearPreview} from './avatar.js';
import {setFilterChangeHandler} from './filter.js';

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;
const ELEMENTS_QUANTITY =10;

const MIN_RENT_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const MATCHING_OF_ROOMS_AND_GUESTS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const adForm = document.querySelector('.ad-form');
const adTitle = adForm.querySelector('#title');
const adType = adForm.querySelector('#type');
const adPrice = adForm.querySelector('#price');
const adTimeIn = adForm.querySelector('#timein');
const adTimeOut = adForm.querySelector('#timeout');
const adRoomsNumber = adForm.querySelector('#room_number');
const adGuestsNumber = adForm.querySelector('#capacity');
const adPriceMax = Number(adPrice.getAttribute('max'));
const buttonReset = adForm.querySelector('.ad-form__reset');

const filterForm = document.querySelector('.map__filters');

const onTitleChange = () => {
  const valueLength = adTitle.value.length;

  if (valueLength < MIN_AD_LENGTH) {
    adTitle.setCustomValidity(`Ещё ${  MIN_AD_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_AD_LENGTH) {
    adTitle.setCustomValidity(`Удалите лишние ${  valueLength - MAX_AD_LENGTH } симв.`);
  } else {
    adTitle.setCustomValidity('');
  }

  adTitle.reportValidity();
};

const onDwellingChange = () => {
  adPrice.placeholder = MIN_RENT_PRICE[adType.value];
  adPrice.min = MIN_RENT_PRICE[adType.value];
};
onDwellingChange();

const onPriceChange = () => {
  const adPriceMin = Number(adPrice.getAttribute('min'));
  const currentPrice = Number(adPrice.value);

  if (currentPrice > adPriceMax) {
    adPrice.setCustomValidity(`Цена должна быть не более ${adPriceMax.toLocaleString()}`);
  } else if (currentPrice < adPriceMin) {
    adPrice.setCustomValidity(`Цена должна быть не менее ${adPriceMin.toLocaleString()}`);
  } else {
    adPrice.setCustomValidity('');
  }

  adPrice.reportValidity();
};

const onTimeChange = (evt) => {
  if (evt.target === adTimeIn) {
    adTimeOut.value = adTimeIn.value;
  }
  if (evt.target === adTimeOut) {
    adTimeIn.value = adTimeOut.value;
  }
};

const onNumberRoomChange = () => {
  const roomsNumber =  Number(adRoomsNumber.value);
  const guestsNumber = Number(adGuestsNumber.value);
  if (!MATCHING_OF_ROOMS_AND_GUESTS[roomsNumber].includes(guestsNumber)) {
    adGuestsNumber.setCustomValidity('Выберите верное количество гостей или комнат');
  } else {
    adGuestsNumber.setCustomValidity('');
  }

  adGuestsNumber.reportValidity();
};

const setAdFormValidation = () => {
  adTitle.addEventListener('input', onTitleChange);
  adPrice.addEventListener('input', onPriceChange);
  adType.addEventListener('change', onDwellingChange);
  adTimeIn.addEventListener('change', onTimeChange);
  adTimeOut.addEventListener('change', onTimeChange);
  adRoomsNumber.addEventListener('change', onNumberRoomChange);
  adGuestsNumber.addEventListener('change', onNumberRoomChange);
};

const setUserFormSubmitHandler = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    sendData(showPopupSuccess, showPopupError, formData);
  });
};

const clearForm = () => {
  adForm.reset();
  filterForm.reset();
  clearPreview();
  resetMapAndMarker();
  getData().then((response) => {
    setPins(response.slice(0, ELEMENTS_QUANTITY));
    setFilterChangeHandler(response);
  });
};

const setFormResetHandler = () => {
  buttonReset.addEventListener('click', () => {
    clearForm();
  });
};

export {
  onDwellingChange,
  setAdFormValidation,
  setUserFormSubmitHandler,
  clearForm,
  setFormResetHandler
};
