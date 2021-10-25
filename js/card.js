import {finalArray} from './data.js';

const HOUSING_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createCustomPopup = (element) => {
  const cardTemplate = document.querySelector('#card').content;
  const popup = cardTemplate.querySelector('.popup');
  const popupClone = popup.cloneNode(true);
  popupClone.querySelector('.popup__title').textContent = element.offer.title;
  popupClone.querySelector('.popup__text--address').textContent = element.offer.address;
  popupClone.querySelector('.popup__text--price').textContent = `${element.offer.price  } ₽/ночь`;

  popupClone.querySelector('.popup__type').textContent = HOUSING_TYPE[element.offer.type];

  popupClone.querySelector('.popup__text--capacity').textContent = `${element.offer.rooms  } комнаты для ${  element.offer.guests  } гостей`;
  popupClone.querySelector('.popup__text--time').textContent = `Заезд после ${  element.offer.checkin  }, выезд до ${  element.offer.checkout}`;
  const userFeatures = element.offer.features;
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

  if (!element.offer.description) {
    popupClone.querySelector('.popup__description').classList.add('visually-hidden');
  } else {
    popupClone.querySelector('.popup__description').textContent = element.offer.description;
  }
  const popupPhotos = popupClone.querySelector('.popup__photos');
  popupPhotos.innerHTML = '';
  element.offer.photos.forEach((photoItem) => {
    const img = document.createElement('img');
    img.classList.add('popup__photo');
    img.src = photoItem;
    img.width = 45;
    img.height = 40;
    popupPhotos.appendChild(img);
  });
  popupClone.querySelector('.popup__avatar').src = element.author.avatar;

  return popupClone;
};

export {createCustomPopup};
