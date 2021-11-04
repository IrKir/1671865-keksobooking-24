import { removePins, setPins } from './map.js';

const RERENDER_DELAY = 500;
const ELEMENTS_QUANTITY = 10;
const ANY_RANGE = 'any';
const priceRange = {
  low: {min: 0, max: 10000},
  middle: {min: 10000, max: 50000},
  high: {min: 50000, max: 1000000},
};

const filterSelect = document.querySelector('.map__filters');
const housingSelect = filterSelect.querySelector('#housing-type');
const priceSelect = filterSelect.querySelector('#housing-price');
const roomsSelect = filterSelect.querySelector('#housing-rooms');
const guestsSelect = filterSelect.querySelector('#housing-guests');

const checkFeatures = (element) => {
  const featuresSelect = filterSelect.querySelectorAll('input[name="features"]:checked');
  if (!element.offer.features) {
    return false;
  }
  return Array.from(featuresSelect).every((feature) => element.offer.features.includes(feature.value));
};

const checkType = (element) => {
  if (housingSelect.value === ANY_RANGE) {
    return true;
  }
  return element.offer.type === housingSelect.value;
};

const checkNumberRooms = (element) => {
  if (roomsSelect.value === ANY_RANGE) {
    return true;
  }
  return element.offer.rooms === +roomsSelect.value;
};

const checkPrice = (element) => {
  if (priceSelect.value === ANY_RANGE) {
    return true;
  }
  return element.offer.price >= priceRange[priceSelect.value].min &&  element.offer.price <= priceRange[priceSelect.value].max;
};

const checkGuests = (element) => {
  if (guestsSelect.value === ANY_RANGE) {
    return true;
  }
  return element.offer.guests === +guestsSelect.value;
};

const setFilterChangeHandler = (offersArray) => {
  filterSelect.addEventListener('change', _.debounce(() => {
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
