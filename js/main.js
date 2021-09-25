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
