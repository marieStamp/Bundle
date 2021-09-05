import { formatError } from "./common.js";
import { Timer } from "./timer.js";
import { sound } from "./timer.js";

export let userTime = document.getElementById('userTime');
const timerError = document.querySelector('.timerError');

export let TimerId = null; 

function startHandler(event) { 
    event.preventDefault();
    timerError.innerHTML = "";
    if (parseInt(userTime.value) > 0) {
        window.TimerId = window.setInterval(Timer, 1000);
    startEl.disabled = true;
    }else {
        timerError.innerHTML = formatError('Введите число');
    }
}

function stopHandler(event) { 
    event.preventDefault();
    window.clearInterval(window.TimerId);
    TimerId = null;
    timerError.innerHTML = "";
    startEl.disabled = false;
    sound.pause();
}

const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');

startEl.addEventListener('click', startHandler);
stopEl.addEventListener('click', stopHandler);


