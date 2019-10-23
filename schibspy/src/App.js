import React, {useContext} from 'react';
import "./App.scss";
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";
import ListOfWinners from "./ListOfWinners";

import {QuizContainer} from "./QuizContainer";

function App() {
  const userRegistered = true;
  const timerOn = false;
 const {secondsLeft} = useContext(QuizContainer.QuizContext);
  const gameInProgress = false;
  const isListOfWinnersAvailable = true;

  return (
      <div className="App">
        <div className="container">
          {!userRegistered && !isListOfWinnersAvailable && <Registration/>}
          {timerOn && <Timer/>}
          {gameInProgress && <Quiz/>}
          {!gameInProgress && isListOfWinnersAvailable && <ListOfWinners/>}
        </div>
      </div>
  );
}

export default App;
