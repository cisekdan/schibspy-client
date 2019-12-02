import React, {useContext} from 'react';
import Registration from "./components/Registration";
import Quiz from "./components/Quiz/";
import ListOfWinners from "./components/ListOfWinners";
import {QuizContainer} from "./QuizContainer";

function Display() {
    const {quizStatus, registeredUser} = useContext(QuizContainer.QuizContext);
    const quizScheduled = quizStatus === "scheduled";
    const gameInProgress = quizStatus === "started";
    const showListOfWinners = quizStatus === "finished";
    if(!registeredUser || quizScheduled) {
        return <Registration quizStatus={quizStatus}/>
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
