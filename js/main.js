function getIntegerFromRange(min, max) {
  if (min < 0 || max <= min) {
    return false;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}

getIntegerFromRange(1, 100);
