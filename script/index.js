const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__profession');
const newJobInput = jobInput.value;
const newName = nameInput.value;

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove('popup_open');
}

function openPopup() {
  popup.classList.add('popup_open');
}

function closePopup() {
  popup.classList.remove('popup_open');
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);


