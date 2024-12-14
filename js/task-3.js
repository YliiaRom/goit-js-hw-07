
const showMessage = document.querySelector('#name-output');
const fieldEl = document.querySelector('#name-input');

fieldEl.addEventListener('input', () => {

const fieldValue = fieldEl.value.trim();
//Під час набору тексту в інпуті його поточне значення підставляється в span#name-output як ім`я для привітання
if (fieldValue === "" || fieldValue === undefined) {
  showMessage.textContent = "Anonymous";
} else {
  showMessage.textContent = `${[fieldValue]}`;
}
})

