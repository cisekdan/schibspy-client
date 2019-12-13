import React, {useContext} from 'react';
import Registration from "./components/Registration";
import Quiz from "./components/Quiz/";
import ListOfWinners from "./components/ListOfWinners";
import {QuizContainer} from "./QuizContainer";

function Display() {
    const { quizStatus, winnersList, showListOfWinners } = useContext(QuizContainer.QuizContext);
    const quizScheduled = quizStatus === "scheduled";
    const gameInProgress = quizStatus === "started";

    if(showListOfWinners) {
        return <ListOfWinners/>
    }
    if(gameInProgress) {
        return <Quiz/>
    }
    if(quizScheduled) {
        return <Registration/>
    }
    return <div/>;
}
export default Display;
