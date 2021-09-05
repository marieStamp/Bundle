import { formElement } from "./datecalc.js";

const switcherCalc = document.querySelector('.switcherCalc');
const switcherTimer = document.querySelector('.switcherTimer');
const timerEl = document.querySelector('.timer');

switcherCalc.addEventListener('click', function () {
    formElement.classList.remove('hidden');
    timerEl.classList.add('hidden');
});

switcherTimer.addEventListener('click', function () {
    formElement.classList.add('hidden');
    timerEl.classList.remove('hidden');
});