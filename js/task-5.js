//генерування випадкового кольору 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBackground = document.querySelector('body');//bgg
const createCol = document.querySelector('.color');//span-col


const changeCol = document.querySelector('.change-color');//btn
changeCol.addEventListener('click', (element) => {

 //по кліку на button. задає  значення кольору текстовим вмістом для span.color.

  let randomNum = getRandomHexColor();
  createCol.textContent = `${[randomNum]}`;

//змінює колір фону елемента <body> через інлайн-стиль по кліку

  createBackground.style.backgroundColor = `${[randomNum]}`;
})
