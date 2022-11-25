import "./css/style.css"
import "./pages/index.css"
import {animate} from './scripts/animation'
import {interectPopup} from './scripts/popup'
import {Data} from './scripts/data'
import {getDataFromFirebase} from './scripts/data'
import { async } from "@firebase/util"


const buttonEdit = document.querySelector('.popup__edit-button');
const popup = document.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__close-button');
const popupForm = popup.querySelector('.popup__inputs')
const popupInputText = popupForm.querySelector('.popup__input-text')
const popupInputSelector = popupForm.querySelector('.popup__input-selector')
const popupSubmitButton = popupForm.querySelector('.popup__save-button')
let inputCheckBox = 0;
export let gettingData = [];
getDataFromFirebase()
window.addEventListener('load', Data.renderList)
popupForm.addEventListener('submit', saveInfo);

function saveInfo(evt) {
    let form = document.forms[0];
let formData = new FormData(form);
let search = new URLSearchParams(formData);
let Url = 'http://tetst/?'+search.toString();
    $.get(Url, function(dataFromPHP, status){
            const arrOfPhpData = dataFromPHP.split(' ')
                Data.create(arrOfPhpData);
                gettingData = []
                getDataFromFirebase()
           })
  popupInputText.value = ''
  popupSubmitButton.classList.add('popup__save-button_type_inactive')
  popupSubmitButton.disabled = true
  }
 (function(){
    animate();
})();


interectPopup(buttonEdit, popup, buttonClose);

console.log('program is working')
