 import { initializeApp } from "firebase/app";
 import { getDatabase, push, ref,get, onValue} from "firebase/database";
 import { gettingData } from "../index";
 const firebaseConfig = {
   apiKey: "AIzaSyA07-HcBxH7Wsik6FpgAYKi2kVmzQa7GNA",
   authDomain: "webpack-web-lab1.firebaseapp.com",
   databaseURL: "https://webpack-web-lab1-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "webpack-web-lab1",
   storageBucket: "webpack-web-lab1.appspot.com",
   messagingSenderId: "246206001729",
   appId: "1:246206001729:web:7faab15c5e0b63351accc0"
 };
 
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app)

export class Data{
 static create(data){
  //pushing in firebase
    push(ref(database, 'data/'), {
        xValue: data[0],
        yValue: data[1],
        rValue: data[2],
        hit: data[3],
        date: data[4],
        time: data[5],
        resultTime:data[6] 
      })

 }
 static renderList() {
  const datas = gettingData

  const html = datas.length
    ? datas.map(toCard).join('')
    : `<div>Вы пока ничего не спрашивали</div>`

  const list = document.querySelector('.list')

  list.innerHTML = html
}

}


//renderin table
function toCard(datas) {
return `<li class="my-3">
<div>Date: ${datas.date}</div>
<div>Time: ${datas.time}</div>
<table class="table-fixed border w-[100%] ">
  <thead>
    <tr class="border">
      <th class="border"> X</th>
      <th class="border">Y</th>
      <th class="border">R</th>
      <th class="border">HIT</th> 
      <th class="border">WORK TIME</th> 
    </tr>
  </thead>
  <tbody>
    <tr class="border">
      <td class="border">${datas.xValue}</td>
      <td class="border">${datas.yValue}</td>
      <td class="border">${datas.rValue}</td>
      <td class="border">${datas.hit}</td>
      <td class="border">${datas.resultTime}</td>
    </tr>
  </tbody>
</table>

    </li>`

}
//Loading data from firebase 
export function getDataFromFirebase(){
const db = getDatabase();
const starCountRef = ref(db, 'data/');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
if(data == null)
{
  console.log('в базе ничего нет')
}else{
  Object.values(data).forEach(element => {
      gettingData.push(element)
  });
  Data.renderList()
}
}
)}