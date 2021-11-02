import { removePins, setPins } from './map.js';

const RERENDER_DELAY = 500;
const ELEMENTS_QUANTITY = 10;
const Range = {
  TYPE:'any',
  MIN: 'low',
  MEAN: 'middle',
};

const filterForm = document.querySelector('.map__filters');
const housingSelect = filterForm.querySelector('#housing-type');
const priceSelect = filterForm.querySelector('#housing-price');
const roomsSelect = filterForm.querySelector('#housing-rooms');
const guestsSelect = filterForm.querySelector('#housing-guests');

const checkFeatures = (element) => {
  const featuresSelect = filterForm.querySelectorAll('.map__checkbox:checked');
  if (!element.offer.features) {
    return false;
  }
  const featuresFilter = [...featuresSelect].map((el) => el.value);
  const filter = featuresFilter.filter((i) => element.offer.features.includes(i));
  return featuresFilter.length === filter.length;
};

const checkType = (element) => {
  if (housingSelect.value === Range.TYPE) {
    return true;
  }
  return element.offer.type === housingSelect.value;
};

const checkNumberRooms = (element) => {
  if (roomsSelect.value === Range.TYPE) {
    return true;
  }
  return element.offer.rooms === +roomsSelect.value;
};

const checkPrice = (element) => {
  if (priceSelect.value === Range.TYPE) {
    return true;
  } else if (priceSelect.value === Range.MIN) {
    return element.offer.price <= 10000;
  } else if (priceSelect.value === Range.MEAN) {
    return element.offer.price > 10000 && element.offer.price <= 50000;
  } else {
    return element.offer.price > 50000;
  }
};

const checkGuests = (element) => {
  if (guestsSelect.value === 'any') {
    return true;
  }
  return element.offer.guests === +guestsSelect.value;
};

const setFilterChangeHandler = (offersArray) => {
  filterForm.addEventListener('change', _.debounce(() => {
    const result = offersArray.filter((offer) => checkType(offer) && checkNumberRooms(offer) && checkGuests(offer) && checkPrice(offer) && checkFeatures(offer));
    removePins();
    setPins(result.slice(0, ELEMENTS_QUANTITY));
  },
  RERENDER_DELAY,
  ));
};

export {
  setFilterChangeHandler,
  ELEMENTS_QUANTITY
};
