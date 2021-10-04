const TITLES = [
  'Уютное бунгало на острове Пасхи',
  'Вместительная юрта в степях Казахстана',
  'Тёплое иглу в дебрях Канады',
  'Минка в тихой сельской местности',
  'Обрядовый вигвам на 25 человек',
  'Небоскрёб в центре Нью-Йорка',
  'Избушка на курьих ножках, очень быстрая',
  'Неприступная сакля в горах',
  'Египетская пирамида, недорого',
  'Замок в центре Европы',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK_IN_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT_HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const ALL_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Прекрасная квартира и вообще',
  'Тихий двор, отличные соседи',
  'В центре, рядом все достопримечательности и развлекательные заведения',
  'Прекрасный вид на море',
  'В шаговой доступности всё, что нужно!',
  'Рядом театр, ледовый дворец, концертный зал и картинная галерея',
  'Два шага и вы на пляже!',
  'Что может быть лучше вида на горы?',
  'Тихая лесо-парковая зона с велосипедными и беговыми дорожками',
  'Выход на прекрасную набережную с дворцами и памятниками',
];

const ALL_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const ANNOUNCEMENT_COUNT = 10;

const getRandomPositiveInteger = (start, finish) => {
  const lower = Math.ceil(Math.min(Math.abs(start), Math.abs(finish)));
  const upper = Math.floor(Math.max(Math.abs(start), Math.abs(finish)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomPositiveFloat (start, finish, digits = 1) {
  const lower = Math.min(Math.abs(start), Math.abs(finish));
  const upper = Math.max(Math.abs(start), Math.abs(finish));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

const getRandomArrayElement = (elements) =>
  elements[_.random(0, elements.length - 1)];

const getArrayRandomLengthUnique = (elements, arrayLength) => {
  let ind = 0;
  let dellElements = elements.slice();
  const newElements = [];
  do {
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
    newElements.push(newElement);
    const index = dellElements.indexOf(newElement);
    dellElements.splice(index, 1);
    ind++;
  } while (ind < arrayLength);
  return dellElements = newElements;
};

const getArrayRandomLengthElement = (elements, arrayLength) => {
  let ind = 0;
  let dellElements = elements.slice();
  const newElements = [];
  do {
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
    newElements.push(newElement);
    ind++;
  } while (ind < arrayLength);
  return dellElements = newElements;
};

let count = 0;
const announcement = () => {
  const featuresLength = getRandomPositiveInteger(1, 6);
  const photosLength = getRandomPositiveInteger(1, 3);
  const locationLat = getRandomPositiveFloat(35.65000, 35.70000, 4);
  const locationLng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  let index;
  if (count < ANNOUNCEMENT_COUNT - 1) {
    count = count + 1;
    index = `0${count}`;
  } else {
    count = count + 1;
    index = `${count}`;
  }
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

const allAnnoucement = [];
for (let ind = 0; ind < 10; ind++) {
  const newAnnouncement = announcement();
  allAnnoucement.push(newAnnouncement);
}
