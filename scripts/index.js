const popupOpenButton = document.querySelector('.start-button');
const popup = document.querySelector('.popup');
// const popupImage = document.querySelector('.popup-image');
// const popupCard = document.querySelector('.popup-card');
// const popupInputForm = document.querySelector('.popup__inputs_profile');
// const popupImageInputForm = document.querySelector('.popup-image__inputs');
// const nameInput = document.querySelector('.popup__input_type_name');
// const jobInput = document.querySelector('.popup__input_type_job');
// const imageNameInput = document.querySelector('.popup__input_type_name-image');
// const imageLinkInput = document.querySelector('.popup__input_type_link-image');
const buttonClose = popup.querySelector('.popup__close-button');
// const imageButtonClose = popupImage.querySelector('.popup-image__close-button');
// const cardButtonClose = popupCard.querySelector('.popup-card__close-button');
// const profileName = document.querySelector('.profile__name');
// const profileJob = document.querySelector('.profile__job');
// const imageButtonAdd = document.querySelector('.profile__add-button');
// const popupTitle = document.querySelector('.popup__title');
// const elementSection = document.querySelector('.elements');
var playing = false; // текущее состояние плеера

var player = new Audio('../sounds/picapica.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ // слушаем окончание трека
  playing = false;
});
popupOpenButton.addEventListener('click', playPause); // слушаем нажатие на кнопку

function playPause() {
  if( playing) {
    player.pause();
  } else {
    player.play();
  }
  playing = !playing;
}

popupOpenButton.addEventListener('click',() => {
  sound();
  showPopup(popup);
  addEventPopupListeners (popup)
  // nameInput.value = profileName.textContent;
  // jobInput.value = profileJob.textContent;
});


// imageButtonAdd.addEventListener('click',() => {showPopup(popupImage)
//   addEventPopupListeners (popupImage)
// }
// );

//добавляет слушатель попапам
function addEventPopupListeners (popup) {
    popup.addEventListener('click', (evt)=>{
      if(evt.target.classList.contains('popup'))
      { 
        closePopup(popup);
      }
    });
    addPopupEscTrigger (popup)
 }

function addPopupEscTrigger (popup) {
  if(popup.classList.contains("popup_opened")){
   document.onkeydown = function(evt){
    if (evt.key === 'Escape') {
       closePopup(popup);
          }
      };
      
}
}

function sound() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = 'https://zvukipro.com/index.php?do=download&id=5036'; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}

buttonClose.addEventListener('click', ()=> {closePopup(popup)
// const nameError = popupProfile.querySelector(`.${nameInput.id}-error`);
// const jobError = popupProfile.querySelector(`.${jobInput.id}-error`);
// nameInput.classList.remove('popup__input_type_error')
// nameError.textContent = '';
// jobInput.classList.remove('popup__input_type_error')
// jobError.textContent = '';
});
// imageButtonClose.addEventListener('click', () => { closePopup(popupImage)
//   imageNameInput.value = "";
//   imageLinkInput.value = "";
//   const imageNameError = popupImage.querySelector(`.${imageNameInput.id}-error`);
// const imageLinkError = popupImage.querySelector(`.${imageLinkInput.id}-error`);
// imageNameInput.classList.remove('popup__input_type_error')
// imageNameError.textContent = '';
// imageLinkInput.classList.remove('popup__input_type_error')
// imageLinkError.textContent = '';});
// cardButtonClose.addEventListener('click', () => {closePopup(popupCard)});
// popupInputForm.addEventListener('submit', saveInfo);
// popupImageInputForm.addEventListener('submit', addImage);

//Добавление шести карточек на страницу через template
// function initialiseCards () {
//   for(let i = initialCards.length-1; i >= 0; i--){
//     const element = initialiseCard (initialCards[i].link,initialCards[i].name);
//     addCard(element);
//   }
    
// };
//Добавление карточки
// function addCard(element){
//   elementSection.prepend(element);
// }
//Создание карточки
// function initialiseCard (link, name) {
//     const elementTemplate = document.querySelector('#element').content;
//     const element = elementTemplate.querySelector('.element').cloneNode(true);
//     element.querySelector('.element__image').src = link;
//     element.querySelector('.element__title').textContent = name;
//     element.querySelector('.element__image').alt = name;//alt заполнен
    //лайки для карточек
    // const buttonLike = element.querySelector('.element__like-button');
    // buttonLike.addEventListener('click', (event) => {
    //     buttonLike.classList.toggle('element__like-button_active');
    // });
     //удаление карточек
//      const buttonDelete = element.querySelector('.element__delete-button')
//      buttonDelete.addEventListener('click', (event) => {
//      buttonDelete.parentNode.remove();
//  });
 //открытие карточки
// const cardImageOpen = element.querySelector('.element__image')
// cardImageOpen.addEventListener('click', (event) => {
//     showPopup(popupCard);
//     addEventPopupListeners (popupCard)
//     popupCard.querySelector('.popup-card__image').src = cardImageOpen.src;
//     popupCard.querySelector('.popup-card__image').alt = cardImageOpen.alt;
//     popupCard.querySelector('.popup-card__caption').textContent = cardImageOpen.alt;
// });
// return element;
// };

//сохранение информации профиля
// function saveInfo(evt) {

//   evt.preventDefault();

//     profileName.textContent = nameInput.value;
//     profileJob.textContent = jobInput.value;
//     closePopup(popupProfile);
//   }
//Добавление новой карточки на стнаницу
  // function addImage(evt) {
  //     evt.preventDefault();
  //     const element = initialiseCard(imageLinkInput.value,imageNameInput.value);
  //     addCard(element);
  //     const imageButtonSave = popupImage.querySelector('.popup__save-button')
  //     imageButtonSave.disabled = true;
  //     imageButtonSave.classList.add('popup__save-button_type_inactive')
  //     imageNameInput.value = '';
  //     imageLinkInput.value = '';
  //     closePopup(popupImage);
  //   }
//открытие попапа
function showPopup(popup) {
      popup.classList.add('popup_opened');
  }
  
  //закрытие попапа
  function closePopup(popup) {
      popup.classList.remove('popup_opened');
    }
  
  

  // initialiseCards();


 