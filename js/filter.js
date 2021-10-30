
const filterForm = document.querySelector('.map__filters');
const mapFilters = filterForm.querySelectorAll('.map__filter');
const featuresInput = filterForm.querySelectorAll('[type="checkbox"]');

const getFilterData = () => {
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

getFilterData();

const get = () => {
  mapFilters.forEach((element) => {
    element.addEventListener('change', getFilterData);
  });
};
get();


