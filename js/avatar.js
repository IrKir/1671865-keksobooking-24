const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.setup-user-pic');

const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const filePreview = document.querySelector('.setup-photo');

const previewAvatar = avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

const previewPhoto = fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    filePreview.src = URL.createObjectURL(file);
  }
});

const clearPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  filePreview.src = 'img/muffin-grey.svg';
};

export {
  previewAvatar,
  previewPhoto,
  clearPreview
};
