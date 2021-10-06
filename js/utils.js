const AVATAR_NUMBER = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

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

const getRandomArrayElement = (elements) =>
  elements[_.random(0, elements.length - 1)];

const getArrayRandomLengthUnique = (elements, arrayLength) => {
  let i = 0;
  let dellElements = elements.slice();
  const newElements = [];
  do {
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
    newElements.push(newElement);
    const index = dellElements.indexOf(newElement);
    dellElements.splice(index, 1);
    i++;
  } while (i < arrayLength);
  return dellElements = newElements;
};

const getArrayRandomLengthElement = (elements, arrayLength) => {
  let i = 0;
  let dellElements = elements.slice();
  const newElements = [];
  do {
    const newElement = (dellElements[_.random(0, dellElements.length - 1)]);
    newElements.push(newElement);
    i++;
  } while (i < arrayLength);
  return dellElements = newElements;
};

export {
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
};
