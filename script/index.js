const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCloseButtonProfile = document.querySelector('.popup__close-button_type_profile');
const popupCloseButtonNewPlace = document.querySelector('.popup__close-button_type_newplace');
const popupCloseButtonImage = document.querySelector('.popup__close-button_image_close');
const popupImage = document.querySelector('.popup_type_image');
const formElementProfile = document.querySelector('.popup__form');
const formElementNewPlace = document.querySelector('.popup__form-newplace');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__profession');
const elementsTitle = document.querySelector('.elements__title');
const addCardButton = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popup_type_new-place');
const placeInput = document.querySelector('.popup__input_value_place');
const srcInput = document.querySelector('.popup__input_value_src');
const section = document.querySelector('.elements'); //куда добавляем
const itemTemplate = document.querySelector('.template').content; //что добавляем
const itemTemplateCard = itemTemplate.querySelector('.elements__item').cloneNode(true);
const newBasket = itemTemplateCard.querySelector('.elements__basket');
const popups = document.querySelectorAll('.popup');//создал массив из всех попапов
const createCardButton = document.querySelector('.create-card-button');
const popupOpened = document.querySelector('.popup_open');
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

function blockButtonDefault () {
createCardButton.setAttribute('disabled', 'disabled');
createCardButton.classList.add('popup__save-button_inactive');
};

initialCards.forEach(function (element) {
  const card = createCardElement(element.name, element.link);
  section.append(card);
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
}

function createCardElement(name, link) {
  const itemTemplateCardNew = itemTemplate.querySelector('.elements__item').cloneNode(true);
  const elementsImage = itemTemplateCardNew.querySelector('.elements__image');
  const basket = itemTemplateCardNew.querySelector('.elements__basket');
  const buttonHeart = itemTemplateCardNew.querySelector('.elements__heart');
  const popupImage = document.querySelector('.popup_type_image');
  const elementsText = itemTemplateCardNew.querySelector('.elements__title');
  buttonHeart.addEventListener('click', function () {
    buttonHeart.classList.toggle('elements__heart_active');
  });
  elementsImage.addEventListener('click', function () {
    popupImage.classList.add('popup_open');
    document.querySelector('.popup__image-image').src = link;
    document.querySelector('.popup__image-image').alt = name;
    document.querySelector('.popup__image-text').textContent = name;
  });
  basket.addEventListener('click', function (evt) {
    itemTemplateCardNew.remove();
  });
  elementsImage.src = link;
  elementsImage.alt = name;
  elementsText.textContent = name;
  return itemTemplateCardNew;
}

function addPlace(evt) {
  const popupImage = document.querySelector('.popup_type_image');
  evt.preventDefault();
  const name = placeInput.value;
  const link = srcInput.value;
  const card = createCardElement(name, link);
  closePopup(popupNewPlace);
  formElementNewPlace.reset();
  section.prepend(card);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_open');
  popupCloseButtonNewPlace.addEventListener('click', function () {
    closePopup(popupNewPlace);
  });
  popupCloseButtonProfile.addEventListener('click', function () {
    closePopup(popupProfile);
  });
  popupCloseButtonImage.addEventListener('click', function () {
    closePopup(popupImage);
  });
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_open');
  popupCloseButtonNewPlace.removeEventListener('click', function () {
    closePopup(popupNewPlace);
  });
  popupCloseButtonProfile.removeEventListener('click', function () {
    closePopup(popupProfile);
  });
  popupCloseButtonImage.removeEventListener('click', function () {
    closePopup(popupImage);
  });
  blockButtonDefault();
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
});

blockButtonDefault();

addCardButton.addEventListener('click', function () {
  openPopup(popupNewPlace);
});

profileEditButton.addEventListener('click', function () {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
});

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

formElementNewPlace.addEventListener('submit', addPlace);

//forEach: перебирает элементы массива и выполняет для каждого свой код
popups.forEach((popup) => {
  popup.addEventListener('click', function (e) {
    if (e.target === e.currentTarget) {
      // popup.classList.remove('popup_open');
      closePopup(popupNewPlace);
      closePopup(popupProfile);
      closePopup(popupImage);
    };
  });
  document.addEventListener('keydown', function (e) {
    if (e.code === 'Escape') {
      // popup.classList.remove('popup_open');
      closePopup(popupNewPlace);
      closePopup(popupProfile);
      closePopup(popupImage);
    };
  });
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    closePopup(popupProfile);
  }
});

document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    closePopup(popupNewPlace);
  }
});
