import React, {useContext} from 'react';
import Registration from "./components/Registration";
import Timer from "./components/Timer.js";
import Quiz from "./components/Quiz";
import ListOfWinners from "./components/ListOfWinners";
import {QuizContainer} from "./QuizContainer";

function Display() {
    const {quizStatus, registeredUser} = useContext(QuizContainer.QuizContext);
    const timerOn = quizStatus === "scheduled";
    const gameInProgress = quizStatus === "started";
    const showListOfWinners = quizStatus === "finished";
    if(!registeredUser) {
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
