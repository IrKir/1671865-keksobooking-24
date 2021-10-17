const adForm = document.querySelector('.ad-form');
const adTitleInput = adForm.querySelector('#title');
const adType = adForm.querySelector('#type');
const adPrice = adForm.querySelector('#price');

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;

const MIN_RENT_PRICE = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};

const adPriceMin = MIN_RENT_PRICE[adType.value];
const adPriceMax = Number(adPrice.getAttribute('max'));

const onChangeTitle = () => {
  const valueLength = adTitleInput.value.lenght;

  if (valueLength < MIN_AD_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${  MIN_AD_LENGTH - valueLength } симв.`);
  } else if (valueLength <MAX_AD_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_AD_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }

  adTitleInput.reportValidity();
};

onChangeTitle();

const onChangeDwelling = () => {
  adPrice.placeholder = adPriceMin;
  adPrice.min = adPriceMin;
};
onChangeDwelling();

const onChangePrice = () => {
  const currentPrice = adPrice.value;
  if (currentPrice > adPriceMax) {
    adPrice.setCustomValidity(`Цена должна быть не более ${adPriceMax}`);
  } else if (currentPrice < adPriceMin) {(   `Цена должна быть не менее ${adPriceMin}`);
  }
};

onChangePrice();




/*function onPriseChange (evt) {
  if (evt.target.matches('select.options[select.selectedIndex]')) {
    adPrice.min = MIN_RENT_PRICE.evt.target.value;
    adPrice.placeholder = MIN_RENT_PRICE.evt.target.value;
    console.log(adPrice.min);
  }
}
adType.addEventListener('change', onPriseChange);*/
