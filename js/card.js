import {finalArray} from './data.js';

const HOUSING_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};
const popupList = document.querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');


//const popupFeatures = popup.querySelector('.popup__features');

const popupClone = popup.cloneNode(true);
popupClone.querySelector('.popup__title').textContent = finalArray[0].offer.title;
popupClone.querySelector('.popup__text--address').textContent = finalArray[0].offer.address;
popupClone.querySelector('.popup__text--price').textContent = `${finalArray[0].offer.price  } ₽/ночь`;
popupClone.querySelector('.popup__type').textContent = HOUSING_TYPE[finalArray[0].offer.type];
popupClone.querySelector('.popup__text--capacity').textContent = `${finalArray[0].offer.rooms  } комнаты для ${  finalArray[0].offer.guests  } гостей`;
popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${  finalArray[0].offer.checkin  }, выезд до ${  finalArray[0].offer.checkout}`;


const userFeatures = finalArray[0].offer.features;
const featuresContainer = popupClone.querySelector('.popup__features');
const featuresList = featuresContainer.querySelectorAll('.popup__feature');
featuresList.forEach((featuresListItem) => {
  const isNecessary = userFeatures.some(
    (userFeature) => featuresListItem.classList.contains(`popup__feature--${  userFeature}`),
  );
  if (!isNecessary) {
    featuresListItem.remove();
  }
});

if (!finalArray[0].offer.description) {
  popupClone.querySelector('.popup__description').classList.add('visually-hidden');
}

popupClone.querySelector('.popup__description').textContent = finalArray[0].offer.description;


const popupPhotos = popupClone.querySelector('.popup__photos');
popupPhotos.innerHTML = '';

finalArray[0].offer.photos.forEach((photoItem) => {
  const img = document.createElement('img');
  img.classList.add('popup__photo');
  img.src = photoItem;
  img.width = 45;
  img.height = 40;
  if (!img.src) {
    photoItem.remove();
  }
  popupPhotos.appendChild(img);
});

popupClone.querySelector('.popup__avatar').src = finalArray[0].author.avatar;

popupList.appendChild(popupClone);
