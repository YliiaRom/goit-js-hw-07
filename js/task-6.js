function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
//controls
const createEl = document.querySelector('#controls');


//input
const inputCreateDiv = document.querySelector('#controls [type="number"]');

//data-create
const btnCreateDiv = document.querySelector('[data-create]');


//data-create
const btnDestroyDiv = document.querySelector('[data-destroy]');


const containerBoxes = document.querySelector('#boxes');




createEl.addEventListener('keydown', (element) => {

  // inputCreateDiv.addEventListener('input', (element) => {
     //значення вводу
  //      const num = inputCreateDiv.value;
  //     })

  
  //Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається

  btnCreateDiv.addEventListener('click', (element) => {
  if (inputCreateDiv.value > 0 && inputCreateDiv.value < 100) {
    createBoxes(inputCreateDiv.value);
  }
    
  })
  btnDestroyDiv.addEventListener('click', (element) => {
    destroyBoxes();
  })



function createBoxes(amount) {
  containerBoxes.innerHTML = "";
  let divArr = [];
  //Розміри першого <div> елемента мають бути 30/30px.
  let size = 30;

for (let i = 0; i < amount; i++) {
const div = document.createElement('div');
div.style.width = `${[size]}px`;
div.style.height = `${[size]}px`;

//мати випадковий колір фону.

div.style.backgroundColor = getRandomHexColor();
divArr.push(div);
//Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
size+=10;
}
containerBoxes.append(...divArr);
inputCreateDiv.value = "";
}

//усі квадрати з div#boxes мають видалятися
function destroyBoxes() {
  containerBoxes.innerHTML = "";
}

})


