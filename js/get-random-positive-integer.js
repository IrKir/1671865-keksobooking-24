// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveInteger(start, finish) {
  const lower = Math.ceil(Math.min(Math.abs(start), Math.abs(finish)));
  const upper = Math.floor(Math.max(Math.abs(start), Math.abs(finish)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

export {getRandomPositiveInteger};
