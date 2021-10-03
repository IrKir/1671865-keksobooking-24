/*function getIntegerFromRange(min, max) {
  if (min < 0 || max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getIntegerFromRange(1, 100);

function getFloatFromRange(min, max, numberOfSigns) {
  if (min < 0 || max <= min) {
    return false;
  }
  const  randomNumber =  (Math.random() * (max - min + 1) + min);
  return +randomNumber.toFixed(numberOfSigns);
}

getFloatFromRange(0.3, 100, 6);*/

/* массив author состоит из одного ключа avatar, строка  — адрес изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10*/
const NUMBERS_PHOTO = [
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
  'Небоскрёб в центре НьЙорка',
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


const getArrayRandomLengthElement = (elements, arrayLength) => {
  let i = 0;
  const newElements = [];
  do {
    const newElement = (elements[_.random(0, elements.length - 1)]);
    newElements.push(newElement);
    const index = elements.indexOf(newElement);
    elements.splice(index, 1);
    i++;
  } while (i < arrayLength);
  elements = newElements;
};

const author = () =>
  ({
    avatar: `img/avatars/user${getRandomArrayElement(NUMBERS_PHOTO)}.png`,
  });

const offer = () => ({
  title: getRandomArrayElement(TITLES),
  address: locations(),
  price: getRandomPositiveInteger(0, 100000),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomPositiveInteger(0, 100),
  guests: getRandomPositiveInteger(0, 100),
  checkin: getRandomArrayElement(CHECK_IN_HOURS),
  checkout: getRandomArrayElement(CHECK_OUT_HOURS),
  features: getArrayRandomLengthElement(ALL_FEATURES, 3),
  description: getRandomArrayElement(DESCRIPTIONS),
  photos: getArrayRandomLengthElement(ALL_PHOTOS, 3),
});

const locations = () => ({
  lat: getRandomPositiveFloat(35.65000, 35.70000, 5),
  lng: getRandomPositiveFloat(139.70000, 139.80000, 5),
});

console.log(author());
console.log(offer());
console.log(locations());

