function getRandomPositiveInteger(start, finish) {
  const lower = Math.ceil(Math.min(Math.abs(start), Math.abs(finish)));
  const upper = Math.floor(Math.max(Math.abs(start), Math.abs(finish)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

getRandomPositiveInteger(8, 10);
