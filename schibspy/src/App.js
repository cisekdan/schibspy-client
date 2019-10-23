import React from 'react';
import "./App.scss";
import Registration from "./Registration";
import Timer from "./Timer.js";
import Quiz from "./Quiz";
import ListOfWinners from "./ListOfWinners";

function App() {
  const userRegistered = false;
  const timerOn = false;
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
