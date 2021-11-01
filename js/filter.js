//const featuresInputs = filterForm.querySelectorAll('[type="checkbox"]');

/*

const setFilterData = () => {
  const housingSelect = filterForm.querySelector('#housing-type').options;
  const housingType = housingSelect[housingSelect.selectedIndex].text;

  const priceSelect = filterForm.querySelector('#housing-price').options;
  const housingPrice = priceSelect[priceSelect.selectedIndex].text;

  const roomsSelect = filterForm.querySelector('#housing-rooms').options;
  const housingRooms = roomsSelect[roomsSelect.selectedIndex].text;

  const guestsSelect = filterForm.querySelector('#housing-guests').options;
  const housingGuests = guestsSelect[guestsSelect.selectedIndex].text;

  console.log(housingType, housingPrice, housingRooms, housingGuests);
};

const featuresNewArray =[];
const setFilterForm = () => {
  mapFilters.forEach((element) => {
    element.addEventListener('change', setFilterData);
  });
  featuresInputs.forEach((featuresInput) => {
    featuresInput.addEventListener('input', () => {
      if (featuresInput === 'checked') {
        featuresNewArray.push(featuresInput);
        console.log(featuresNewArray);
      }
    });
  });
};
setFilterForm();*/

import { removePins, setPins } from './map.js';

const filterForm = document.querySelector('.map__filters');
const housingSelect = filterForm.querySelector('#housing-type');
const priceSelect = filterForm.querySelector('#housing-price');
const roomsSelect = filterForm.querySelector('#housing-rooms');
const guestsSelect = filterForm.querySelector('#housing-guests');


const checkFeatures = (element) => {
  const featuresSelect = filterForm.querySelectorAll('.map__checkbox:checked');

  const featuresFilter = [...featuresSelect].map((el) => el.value);
  const filter = featuresFilter.filter((i) => element.offer.features.includes(i));
  console.log(featuresFilter.length, filter.length);
  return featuresFilter.length === filter.length;

};

const checkType = (element) => {
  if (housingSelect.value === 'any') {
    return true;
  }
  return element.offer.type === housingSelect.value;
};

const checkNumberRooms = (element) => {
  if (roomsSelect.value === 'any') {
    return true;
  }
  return element.offer.rooms === +roomsSelect.value;
};

const checkPrice = (element) => {
  if (priceSelect.value === 'any') {
    return true;
  } else if (priceSelect.value === 'low') {
    return element.offer.price <= 10000;
  } else if (priceSelect.value === 'middle') {
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
  filterForm.addEventListener('change', () => {
    const result = offersArray.filter((offer) => checkType(offer) && checkNumberRooms(offer) && checkGuests(offer) && checkPrice(offer) && checkFeatures(offer));
    removePins();
    setPins(result);
  });
};

export { setFilterChangeHandler };
