import {getRandomPositiveInteger} from './get-random-positive-integer.js';
import {getRandomPositiveFloat} from './get-random-positive-float.js';
import {
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

let count = 0;
const getElement = () => {
  const featuresLength = getRandomPositiveInteger(1, 6);
  const photosLength = getRandomPositiveInteger(1, 3);
  const locationLat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const locationLng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  let index;
  if (count < ANNOUNCEMENT_COUNT) {
    count = count + 1;
    index = `0${count}`;
  } else {
    count = count + 1;
    index = `${count}`;
  }
  console.log(count);
  console.log(index);
  return {
    author: {
      avatar: `img/avatars/user${index}.png`,
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

const getFinalArray = () =>
  Array.from({length:ANNOUNCEMENT_COUNT}, getElement);

export {getFinalArray};
