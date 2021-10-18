const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;

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

// Проверка валидности заголовка
const onChangeTitle = () => {
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

// Присвоение минимальной цены в зависимости от типа жилья
const onChangeDwelling = () => {
  adPrice.placeholder = MIN_RENT_PRICE[adType.value];
  adPrice.min = MIN_RENT_PRICE[adType.value];
};
onChangeDwelling();

// Проверка валидности цены
const onChangePrice = () => {
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
onChangePrice();

//Установка соответствия времени въезда и выезда
const onChangeTime = (evt) => {
  if (evt.target === adTimeIn) {
    adTimeOut.value = adTimeIn.value;
  }
  if (evt.target === adTimeOut) {
    adTimeIn.value = adTimeOut.value;
  }
};

//Проверка валидности гостей-комнат
const checkMatchingRoomsAndGuests = () => {
  const roomsNumber = adRoomsNumber.value;
  const guestsNumber = adGuestsNumber.value;
  if (!MATCHING_OF_ROOMS_AND_GUESTS[roomsNumber].includes(guestsNumber)) {
    adGuestsNumber.setCustomValidity('Выберите верное количество гостей или комнат');
  } else {
    adGuestsNumber.setCustomValidity('');
    adRoomsNumber.setCustomValidity('');
  }

  adGuestsNumber.reportValidity();
  adRoomsNumber.reportValidity();
};


// Общая функция проверки валидности
const adFormValidation = () => {
  adTitle.addEventListener('input', onChangeTitle);
  adPrice.addEventListener('input', onChangePrice);
  adType.addEventListener('change', onChangeDwelling);
  adTimeIn.addEventListener('change', onChangeTime);
  adTimeOut.addEventListener('change', onChangeTime);
  adRoomsNumber.addEventListener('change', checkMatchingRoomsAndGuests);
  adGuestsNumber.addEventListener('change', checkMatchingRoomsAndGuests);
};

adFormValidation();

/*function onPriseChange (evt) {
  if (evt.target.matches('select.options[select.selectedIndex]')) {
    adPrice.min = MIN_RENT_PRICE.evt.target.value;
    adPrice.placeholder = MIN_RENT_PRICE.evt.target.value;
    console.log(adPrice.min);
  }
}
adType.addEventListener('change', onPriseChange);*/
