import "./css/style.css"
import "./pages/index.css"
import {animate} from './scripts/animation'
import {interectPopup} from './scripts/popup'
import {Data} from './scripts/data'
import {getDataFromFirebase} from './scripts/data'


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










jQuery.ajax({
  type: "POST",
  url: '../src/index.php',
  dataType: 'json',
  data: {functionname: 'add', arguments: [1, 2]},

  success: function (obj, textstatus) {
                if( !('error' in obj) ) {
                    yourVariable = obj.result;
                    console.log('nssssj')
                }
                else {
                    console.log(obj.error);
                }
          }
});





function saveInfo(evt) {
    evt.preventDefault();
  

    const data = {

        xValue: Number($("input[type=checkbox][name=xValue]:checked").val()),
        yValue: Number(popupInputText.value.trim()),
        rValue: Number(popupInputSelector.value),
        date: new Date().toJSON()
    } 
    if($("input[type=checkbox][name=xValue]:checked").val() === undefined)
    {
      data.xValue = 0
    }
    Data.create(data);
    gettingData = []
    getDataFromFirebase()
    popupInputText.value = "";
  }
 (function(){
    animate();
})();
popupForm.addEventListener('submit', saveInfo);
interectPopup(buttonEdit, popup, buttonClose);

console.log('program is working')