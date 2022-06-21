const profileEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const popupCloseButtonProfile = document.querySelector('.popup__close-button');
const popupCloseButtonNewPlace = document.querySelector('.popup__close-button_NewPlace');
const popupCloseButtonImage = document.querySelector('.popup__close-button_image');
const popupImage = document.querySelector('.popupImage');
const formElementProfile = document.querySelector('.popup__form');
const formElementNewPlace = document.querySelector('.popup__formNewPlace');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const profileName = document.querySelector('.profile__full-name');
const job = document.querySelector('.profile__profession');
const elementsTitle = document.querySelector('.elements__title');
const AddCardButton = document.querySelector('.profile__add-button');
const popupNewPlace = document.querySelector('.popupNewPlace');
const placeInput = document.querySelector('.popup__input_value_place');
const srcInput = document.querySelector('.popup__input_value_src');
const section = document.querySelector('.elements'); //куда добавляем
const itemTemplate = document.querySelector('.item_template').content; //что добавляем
const itemTemplateCard = itemTemplate.querySelector('.elements__item').cloneNode(true);
const newBasket = itemTemplateCard.querySelector('.elements__basket');
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



initialCards.forEach(function (element) {
  const itemTemplateCard = itemTemplate.querySelector('.elements__item').cloneNode(true);
  const basket = itemTemplateCard.querySelector('.elements__basket');
  const buttonHeart = itemTemplateCard.querySelector('.elements__heart');
  const elementsImage = itemTemplateCard.querySelector('.elements__image');
  const popupCloseButton = document.querySelector('.popup__close-button');
  buttonHeart.addEventListener('click', function () {
    buttonHeart.classList.toggle('elements__heart_active');
  });
  elementsImage.addEventListener('click', function () {
    popupImage.classList.add('popup_open');
    document.querySelector('.popupImage__image').src = element.link;
    document.querySelector('.popupImage__image').alt = element.name;
    document.querySelector('.popupImage__text').textContent = element.name;
  });
  basket.addEventListener('click', function () {
    itemTemplateCard.remove();
  });
  function createCard() {
    itemTemplateCard.querySelector('.elements__image').src = element.link;
    itemTemplateCard.querySelector('.elements__image').alt = element.name;
    itemTemplateCard.querySelector('.elements__title').textContent = element.name;
  }
  createCard();
  section.append(itemTemplateCard);
});

function formSubmitHandlerProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  job.textContent = jobInput.value;
  closePopup(popupProfile);
}


function addPlace(evt) {
  const itemTemplateCardNew = itemTemplate.querySelector('.elements__item').cloneNode(true);
  const elementsImage = itemTemplateCardNew.querySelector('.elements__image');
  const popupImage = document.querySelector('.popupImage');
  const popupCloseButton = document.querySelector('.popup__close-button');
  const newBasket = itemTemplateCardNew.querySelector('.elements__basket');
  const buttonHeart = itemTemplateCardNew.querySelector('.elements__heart');
  const linkImage = itemTemplateCardNew.querySelector('.elements__title').textContent;
  evt.preventDefault();

  section.prepend(itemTemplateCardNew);
  const name = itemTemplateCardNew.querySelector('.elements__title').textContent = placeInput.value;
  const link = elementsImage.src = srcInput.value;


  newBasket.addEventListener('click', function (evt) {
    itemTemplateCardNew.remove();
  });
  buttonHeart.addEventListener('click', function () {
    buttonHeart.classList.toggle('elements__heart_active');
  });
  elementsImage.addEventListener('click', function (evt) {
    popupImage.classList.add('popup_open');
    document.querySelector('.popupImage__image').src = srcInput.value;
    document.querySelector('.popupImage__text').textContent = placeInput.value;
  });
  popupCloseButtonImage.addEventListener('click', function () {
    popupImage.classList.remove('popup_open');
  });
  closePopup(popupNewPlace);
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_open');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_open');
}

popupCloseButtonImage.addEventListener('click', function () {
  popupImage.classList.remove('popup_open');
});

AddCardButton.addEventListener('click', function() {
  openPopup(popupNewPlace);
});

profileEditButton.addEventListener('click', function() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = job.textContent;
});

popupCloseButtonProfile.addEventListener('click', function() {
  closePopup(popupProfile);
});

popupCloseButtonNewPlace.addEventListener('click', function() {
  closePopup(popupNewPlace);
});

formElementProfile.addEventListener('submit', formSubmitHandlerProfile);

formElementNewPlace.addEventListener('submit', addPlace);
