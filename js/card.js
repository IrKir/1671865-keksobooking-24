const HOUSING_TYPE = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const checkForAvailability = (value, element) => value || element.classList.add('visually-hidden');

const cardTemplate = document.querySelector('#card').content;
const popup = cardTemplate.querySelector('.popup');

const createCustomPopup = (element) => {
  const popupClone = popup.cloneNode(true);

  const popupTitle = popupClone.querySelector('.popup__title');
  const popupAddress = popupClone.querySelector('.popup__text--address');
  const popupPrice = popupClone.querySelector('.popup__text--price');
  const popupType = popupClone.querySelector('.popup__type');
  const popupCapacity = popupClone.querySelector('.popup__text--capacity');
  const popupTime = popupClone.querySelector('.popup__text--time');
  const popupDescription = popupClone.querySelector('.popup__description');
  const popupPhotos = popupClone.querySelector('.popup__photos');
  const popupPhoto = popupClone.querySelector('.popup__photo');
  const popupAvatar = popupClone.querySelector('.popup__avatar');


  popupTitle.textContent = checkForAvailability(element.offer.title, popupTitle);
  popupAddress.textContent = checkForAvailability(element.offer.address, popupAddress);
  popupPrice.textContent = `${checkForAvailability(element.offer.price, popupPrice)} ₽/ночь`;
  popupType.textContent = checkForAvailability(HOUSING_TYPE[element.offer.type], popupType);
  popupCapacity.textContent = `${checkForAvailability(element.offer.rooms, popupCapacity)} комнаты для ${checkForAvailability(element.offer.guests, popupCapacity)} гостей`;
  popupTime.textContent = `Заезд после ${checkForAvailability(element.offer.checkin, popupTime)}, выезд до ${checkForAvailability(element.offer.checkout, popupTime)}`;

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
  popupDescription.textContent = checkForAvailability(element.offer.description, popupDescription);


  popupPhotos.innerHTML = '';
  element.offer.photos.forEach((photoItem) => {
    const photo = popupPhoto.cloneNode(true);
    if (photoItem) {
      photo.src = photoItem;
      popupPhotos.append(photo);
    } else {
      popupPhotos.classList.add('visually-hidden');
      photo.alt ='';
    }
  });
  popupAvatar.src = checkForAvailability(element.author.avatar, popupAvatar);

  return popupClone;
};

export {createCustomPopup};
