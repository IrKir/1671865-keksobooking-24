const adTitleInput = document.querySelector('#title');

const MIN_AD_LENGTH = 30;
const MAX_AD_LENGTH = 100;

adTitleInput.addEventListener('input', () => {
  const valueLength = adTitleInput.value.lenght;

  if (valueLength < MIN_AD_LENGTH) {
    adTitleInput.setCustomValidity(`Ещё ${  MIN_AD_LENGTH - valueLength } симв.`);
  } else if (valueLength <MAX_AD_LENGTH) {
    adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_AD_LENGTH } симв.`);
  } else {
    adTitleInput.setCustomValidity('');
  }

  adTitleInput.reportValidity();
});

