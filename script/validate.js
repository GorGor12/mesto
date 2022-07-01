//ф-ция "установить прослушиватель событий"
const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector));
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, selectors);
      toggleButtonState(inputList, buttonElement, selectors);
    });
  });
};
//ф-ция включения валидации
const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, selectors);
  });
};

//ф-ция - "является действительным" ввод?
const isValid = (formElement, inputElement, selectors) => { //добавили 2 параметра formElement, inputElement
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors);//обратились в св-ву валидейшнмеседж у конкретного инпута, для получения текста какой-то ошибки
  } else {
    hideInputError(formElement, inputElement, selectors);
  }
};

//ф-ция переключения состояния кнопки
const toggleButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(selectors.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', 'disabled');
  }
};

//ф-ция показа ошибки в инпуте
const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);//находим в form - составной класс из id формы и слова error, получаем класс какой-то конкретной ошибки из крнкретного инпута
  inputElement.classList.add(selectors.inputErrorClass); //добавляем класс который сделает красную рамку инпуту
  errorElement.textContent = errorMessage;
  errorElement.classList.add(`${inputElement.id}-error_active`);
  errorElement.classList.add(selectors.errorClass);
};
//ф-ция скрытия ошибки в инпуте
const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(selectors.inputErrorClass);
  errorElement.classList.remove(`${inputElement.id}-error_active`);
  errorElement.classList.remove(selectors.errorClass);
  errorElement.textContent = '';
};

//ф-ция наличия некорректного ввода
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
