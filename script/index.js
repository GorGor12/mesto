const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupCloseButtonNewPlace = document.querySelector('.popup__close-button_NewPlace');
const formElement = document.querySelector('.popup__form');
const formElementNewPlace = document.querySelector('.popup__form_newPlace');

const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__profession');
const elementsTitle = document.querySelector('.elements__title');
const elementsImage = document.querySelector('.elements__image');

const profileAddButton = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popupNewPlace');
const placeInput = document.querySelector('.popup__input_value_place');
const srcInput = document.querySelector('.popup__input_value_src');
const section = document.querySelector('.elements'); //куда добавляем
const itemTemplate = document.querySelector('.item_template').content; //что добавляем

const itemTemplateCard = itemTemplate.querySelector('.elements__item').cloneNode(true);
const buttonHeart = itemTemplateCard.querySelector('.elements__heart');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
initialCards.forEach(function(element) {
  const itemTemplateCard = itemTemplate.querySelector('.elements__item').cloneNode(true);
  itemTemplateCard.querySelector('.elements__image').src = element.link;
  itemTemplateCard.querySelector('.elements__title').textContent = element.name;
  section.append(itemTemplateCard);
});




function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup();
}

function formSubmitHandlerNewPlace(evt) {
  const itemTemplateCardNew = itemTemplate.querySelector('.elements__item').cloneNode(true);
  evt.preventDefault();
  section.prepend(itemTemplateCardNew);
  itemTemplateCardNew.querySelector('.elements__title').textContent = placeInput.value;
  itemTemplateCardNew.querySelector('.elements__image').src = srcInput.value;
  closeNewPlacePopup();
}



function openNewPlacePopup () {
  popupNewPlace.classList.add('popupNewPlace_open');
}

function closeNewPlacePopup () {
  popupNewPlace.classList.remove('popupNewPlace_open');
}

profileAddButton.addEventListener('click', openNewPlacePopup);



function openPopup() {
  popup.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
}

function closePopup() {
  popup.classList.remove('popup_open');
}

function openPlacePopup() {
  popup.classList.add('popup_open');
}

function changeHeart() {
  buttonHeart.classList.add('elements__heart_active');
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

popupCloseButtonNewPlace.addEventListener('click', closeNewPlacePopup);

formElement.addEventListener('submit', formSubmitHandler);

formElementNewPlace.addEventListener('submit', formSubmitHandlerNewPlace);


buttonHeart.addEventListener('click', changeHeart);


















