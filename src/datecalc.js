import { formatError } from "./common.js";
import { diffDate, diffToHtml } from "./diff.js";

export const formElement = document.querySelector('.dateCalc-form');
const resultElement = document.querySelector('.dateCalc-result');

formElement.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    resultElement.innerHTML = "";
    
    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const result = diffToHtml(diffDate(firstDate, secondDate)); 
        resultElement.innerHTML = result;
    } else resultElement.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");

}