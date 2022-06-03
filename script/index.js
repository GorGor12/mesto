const button = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input');
const jobInput = document.querySelector('.popup__inputprof');
const profileName = document.querySelector('.profile__fullname');
const job = document.querySelector('.profile__profession');
const NewJobInput = jobInput.value;
const NewName = nameInput.value;
const buttonSave = document.querySelector('.popup__save-button');

button.addEventListener('click', function () {
  popup.classList.add('popup_open');
});

popupCloseButton.addEventListener('click', function () {
  popup.classList.remove('popup_open');
});

function formSubmitHandler(evt) {
  evt.preventDefault();
}

buttonSave.addEventListener('click', function () {
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popup.classList.remove('popup_open');
});

formElement.addEventListener('submit', formSubmitHandler);

document.addEventListener('keypress', function (e) {
  if (e.code === "Enter") {
    profileName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.remove('popup_open');
  }
});



















