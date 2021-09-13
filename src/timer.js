import { userTime } from "./handleBtns.js";
import { TimerId } from "./handleBtns.js";
import audio1 from "../media/timer-bell.mp3";

export const sound = new Audio(audio1);
export function Timer() { 
    userTime.value = parseInt(userTime.value)-1;
    if(userTime.value == 0) {
        clearInterval(TimerId);
        sound.play();
    }else if(userTime.value <= 0) {
        window.clearInterval(window.TimerId);
        document.location.reload();
    
}
}

    
