export function interectPopup(buttonEdit, popup, buttonClose){
  const nameInput = document.querySelector('.popup__input'); 
  const button =document.querySelector('.popup__save-button');
  const inputText = document.querySelector('.popup__input-text');
  const validationConfig = {
    formSelector: '.popup__inputs',
    submitButtonSelector: '.popup__save-button',
    inputSelector: '.popup__input',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active',
    inactiveButtonClass: 'popup__save-button_type_inactive'
  }

$("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});


//закрытие ЕSC
function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const popup = document.querySelector('.popup_opened'); 
      hidePopup(popup);
    }
  }
  //Закрытие кликом по оверлею
  function closeByClick (evt){
    if (evt.target.classList.contains('popup_opened')) {
      hidePopup(evt.target);
    }
  };
  buttonEdit.addEventListener('click', () => {
    showPopup(popup);
});
buttonClose.addEventListener('click', () => {
    hidePopup(popup)
});



  //открытие попапа
  function showPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closeByEsc);
    popup.addEventListener("mousedown", closeByClick);
  }

  
  //закрытие попапа
  function hidePopup(popup) {
    removeFormErrors(validationConfig)
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeByEsc);
    popup.removeEventListener("mousedown", closeByClick);
  }


  const showInputError = (buttonElement, formElement, inputElement, errorMessage, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(config.errorClass);
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  };
  //спрятать ошибку
  const hideInputError = (buttonElement, formElement, inputElement, config) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    if(inputText.classList.contains(config.inputErrorClass)){
      inputElement.classList.remove(config.inputErrorClass);
      errorElement.textContent = '';
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = false;
    }

  };
  
  //проверка вводных данных на валидность
  const checkInputValidity = (buttonElement, formElement, inputElement, config) => {
    if (Number(inputElement.value) >= -3 && Number(inputElement.value) <= 5 ) {
        hideInputError(buttonElement, formElement, inputElement, config);
          } else {
      showInputError(buttonElement, formElement, inputElement, 'введите число от -3 до 5', config);
    }
  };
  
  //создание слушателей для полей
  const setEventListeners = (formElement, config) => {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, config);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(buttonElement, formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
      });
    });
  };
  
  //включение валидации
  const enableValidation = (config) => {
    const formList = Array.from(document.querySelectorAll(config.formSelector));
    formList.forEach((formElement) => {
      if (!formElement.classList.contains(config.popupCarsSelector)) {
        setEventListeners(formElement, config);
      }
    });
  };

  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //активация и деактивация кнопки
  const toggleButtonState = (inputList, buttonElement, config) => {
    if ((Number(inputText.value) >= -3 && Number(inputText.value) <= 5) ) {
      buttonElement.classList.remove(config.inactiveButtonClass);
      buttonElement.disabled = false;
    } 
    if(inputText.value === "" || (Number(inputText.value) <= -3 && Number(inputText.value) >= 5)) {
      buttonElement.classList.add(config.inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }
  
 
  //bugfix: сброс ошибок
  function removeFormErrors(config) {
      const nameError = document.querySelector(`.yValue-error`);
      nameInput.classList.remove(config.inputErrorClass)
      nameError.textContent = '';
      inputText.value = ''
  }
  enableValidation(validationConfig);


}