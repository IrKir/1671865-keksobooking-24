// Функция взята из интернета и доработана
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (start, finish, digits = 1) {
  const lower = Math.min(Math.abs(start), Math.abs(finish));
  const upper = Math.max(Math.abs(start), Math.abs(finish));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
}

export {getRandomPositiveFloat};

