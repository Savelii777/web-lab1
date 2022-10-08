export function interectPopup(buttonEdit, popup, buttonClose){
//хакрытие ЕSC
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
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeByEsc);
    popup.removeEventListener("mousedown", closeByClick);
  }

}
