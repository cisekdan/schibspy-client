import React, {useContext} from 'react';
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";
import ListOfWinners from "./ListOfWinners";
import {QuizContainer} from "./QuizContainer";

function Display() {
    const {quizStatus} = useContext(QuizContainer.QuizContext);
    const userRegistered = true;
    const timerOn = quizStatus === "scheduled";
    const gameInProgress = quizStatus === "started";
    const showListOfWinners = quizStatus === "finished";

    if(!userRegistered) {
        return <Registration/>
    }
    if(timerOn) {
        return <Timer />
    }
    if(gameInProgress) {
        return <Quiz/>
    }
    if (showListOfWinners) {
        return <ListOfWinners/>
    }
    return <div/>;

}

export default Display;
