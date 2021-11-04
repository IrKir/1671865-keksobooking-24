const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form__field input[type=file]');
const avatarPreview = document.querySelector('.setup-user-pic');
const avatarPreviewClon = avatarPreview.cloneNode(true);
const fileChooser = document.querySelector('.ad-form__upload input[type=file]');
const filePreview = document.querySelector('.ad-form__photo');

const showPreviewAvatar = avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {
    avatarPreview.src = URL.createObjectURL(file);
  }
});

const showPreviewPhoto = fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((element) => fileName.endsWith(element));

  if (matches) {

    avatarPreviewClon.src = URL.createObjectURL(file);
    filePreview.append(avatarPreviewClon);
  }
});

const clearPreview = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  avatarPreviewClon.remove();
};

export {
  showPreviewAvatar,
  showPreviewPhoto,
  clearPreview
};
