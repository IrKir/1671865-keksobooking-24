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

import {removePins, setPins} from './map.js';

const filterForm = document.querySelector('.map__filters');
const mapFilter = filterForm.querySelector('.map__filter');
const housingSelect = filterForm.querySelector('#housing-type');
const roomsSelect = filterForm.querySelector('#housing-rooms');

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

const setFilterChangeHandler = (offersArray) => {
  filterForm.addEventListener('change', () => {
    const result = offersArray.filter((offer) => checkType(offer) && checkNumberRooms(offer));
    removePins();
    setPins(result);
  });
};

export {setFilterChangeHandler};
