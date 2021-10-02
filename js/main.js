function getIntegerFromRange(min, max) {
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

getFloatFromRange(0.3, 100, 6);

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

const getRandomArrayElement = (elements) =>
  elements[_.random(0, elements.length - 1)];

const author = () => ({
  avatar: `img/avatars/user${getRandomArrayElement(NUMBERS_PHOTO)}.png`,
});
console.log(author());

const offer = () => ({
  title: getRandomArrayElement(TITLES),
  address: '',
  price: 
});

