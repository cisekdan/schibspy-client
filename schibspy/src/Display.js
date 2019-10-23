import React from 'react';
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";
import ListOfWinners from "./ListOfWinners";

function Display() {
    const userRegistered = true;
    const timerOn = false;
    const gameInProgress = true;

    if(!userRegistered) {
        return <Registration/>
    }
    if(timerOn) {
        return <Timer />
    }
    if(gameInProgress) {
        return <Quiz/>
    }
    return <ListOfWinners/>
}

export default Display;
