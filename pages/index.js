const button = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
button.addEventListener('click', function() {
    popup.classList.remove('popup_hidden');
});
popupCloseButton.addEventListener('click', function() {
    popup.classList.add('popup_hidden');
});
let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.popup__input');
let jobInput = document.querySelector('.popup__inputprof');
console.log(nameInput.value);
console.log(jobInput.value);
const buttonSave = document.querySelector('.popup__save-button');
let profileName = document.querySelector('.profile__fullname');
let job = document.querySelector('.profile__profession');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
}
let NewJobInput = jobInput.value;    
let NewName = nameInput.value;
buttonSave.addEventListener('click', function() {
    profileName.textContent = nameInput.value;
    job.textContent = jobInput.value;
    popup.classList.add('popup_hidden');
});

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

document.addEventListener('keypress', function(e) {
    if (e.code === "Enter") {
        profileName.textContent = nameInput.value;
        job.textContent = jobInput.value;
        popup.classList.add('popup_hidden');
    }
});



















