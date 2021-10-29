/*import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {getRandomPositiveFloat} from './get-random-positive-float.js';
import {
  AVATAR_NUMBER,
  TITLES,
  TYPES,
  CHECK_IN_HOURS,
  CHECK_OUT_HOURS,
  ALL_FEATURES,
  DESCRIPTIONS,
  ALL_PHOTOS,
  ANNOUNCEMENT_COUNT,
  getRandomArrayElement,
  getArrayRandomLengthUnique,
  getArrayRandomLengthElement
} from './utils.js';

const getElement = () => {
  const featuresLength = getRandomPositiveInteger(1, 6);
  const photosLength = getRandomPositiveInteger(1, 3);
  const locationLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const locationLng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: `img/avatars/user${AVATAR_NUMBER.shift()}.png`,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: String(`${locationLat}, ${ locationLng}`),
      price: getRandomPositiveInteger(0, 100000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomPositiveInteger(0, 100),
      guests: getRandomPositiveInteger(0, 100),
      checkin: getRandomArrayElement(CHECK_IN_HOURS),
      checkout: getRandomArrayElement(CHECK_OUT_HOURS),
      features: getArrayRandomLengthUnique(ALL_FEATURES, featuresLength),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getArrayRandomLengthElement(ALL_PHOTOS, photosLength),
    },
    location: {
      lat: locationLat,
      lng: locationLng,
    },
  };
};

const finalArray = Array.from({length:ANNOUNCEMENT_COUNT}, getElement);
export {finalArray};*/
